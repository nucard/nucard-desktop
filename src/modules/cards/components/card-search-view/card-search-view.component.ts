import { Component, OnInit, ViewChild } from '@angular/core';
import { NcCard, NcSearchResult } from '@nucard/models/dist';
import { CardsService } from '../../services/cards.service';
import { SearchResultViewModelsService, SearchResultViewModel } from '../../services/search-result-view-models.service';
import { SearchBoxDirective } from '../../directives/search-box.directive';

@Component({
    selector: 'nc-card-search-view',
    templateUrl: './card-search-view.component.html',
    styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements OnInit {
    private _activeSearchDebounce: NodeJS.Timer;
    private _searchDebounceLengthMs = 300;

    blark: NcSearchResult[];
    searchResults: SearchResultViewModel[];
    selectedResult: SearchResultViewModel;
    searchPrompt = 'Try "Lightning Bolt"';
    query: string;
    isSearching = false;

    @ViewChild(SearchBoxDirective) searchBox: SearchBoxDirective;

    constructor(
        private cardsService: CardsService,
        private searchResultViewModelsService: SearchResultViewModelsService) { }

    ngOnInit() {
        this.setSearchPrompt();
    }

    async setSearchPrompt() {
        const cardName = this
            .cardsService
            .getRandomCard()
            .subscribe(card => {
                this.searchPrompt = `Try "${card.name}"`;
                this.searchBox.focus();
            });
    }

    async onQueryChanged() {
        clearTimeout(this._activeSearchDebounce);

        // change the search prompt if they clear the box
        if (!this.query) {
            this.setSearchPrompt();
            this.searchResults = null;
            this.isSearching = false;
            return;
        }

        this.isSearching = true;
        this.selectedResult = null;

        this._activeSearchDebounce = setTimeout(() => {
            this.cardsService
                .search(this.query)
                .subscribe(searchResults => {
                    this.blark = searchResults;
                    this.searchResults = this.searchResultViewModelsService.transformNcSearchResults(searchResults);
                    this.isSearching = false;

                    if (this.searchResults.length === 1) {
                        this.resultSelected(this.searchResults[0]);
                    }
                });
        }, this._searchDebounceLengthMs);
    }

    resultSelected(result: SearchResultViewModel) {
        this.searchResults = null;
        this.selectedResult = result;
        this.searchBox.blur();
    }
}
