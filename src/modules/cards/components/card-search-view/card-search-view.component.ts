import { Component, OnInit, ViewChild } from '@angular/core';
import { NcCard } from '@nucard/models';
import { CardsService } from '../../services/cards.service';
import { SearchBoxDirective } from '../../directives/search-box.directive';

@Component({
    selector: 'nc-card-search-view',
    templateUrl: './card-search-view.component.html',
    styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements OnInit {
    cards: NcCard[];
    selectedCard: NcCard;
    searchPrompt = 'Try "Lightning Bolt"';
    query: string;
    isSearching = false;

    @ViewChild(SearchBoxDirective) searchBox: SearchBoxDirective;

    constructor(private cardsService: CardsService) { }

    ngOnInit() {
        this.setSearchPrompt();
    }

    async setSearchPrompt() {
        const cardName = this
            .cardsService
            .getRandomCard()
            .subscribe(card => {
                console.log('lets go', card.name);
                this.searchPrompt = `Try "${card.name}"`;
            });
    }

    async onQueryChanged() {
        this.isSearching = true;
        this.selectedCard = null;

        // change the search prompt if they clear the box
        if (!this.query) {
            this.setSearchPrompt();
        }

        this.cardsService
            .search(this.query)
            .subscribe(cards => {
                this.cards = cards;
                this.isSearching = false;
            });
    }

    cardSelected(card: NcCard) {
        this.cards = null;
        this.selectedCard = card;
        this.searchBox.blur();
    }
}
