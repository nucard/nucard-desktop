import { Component, ViewChild } from '@angular/core';
import { NcCard } from '@nucard/models';
import { CardsService } from '../../services/cards.service';
import { SearchBoxDirective } from '../../directives/search-box.directive';

@Component({
    selector: 'nc-card-search-view',
    templateUrl: './card-search-view.component.html',
    styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent {
    cards: NcCard[];
    selectedCard: NcCard;
    query: string;
    isSearching = false;

    @ViewChild(SearchBoxDirective) searchBox: SearchBoxDirective;

    constructor(private cardsService: CardsService) { }

    getSearchPrompt() {
        return `Try "Lightning Bolt"`;
    }

    async onQueryChanged() {
        this.isSearching = true;
        this.selectedCard = null;
        this.cards = await this.cardsService.search(this.query);
        this.isSearching = false;
    }

    cardSelected(card: NcCard) {
        this.cards = null;
        this.selectedCard = card;
        this.searchBox.blur();
    }
}
