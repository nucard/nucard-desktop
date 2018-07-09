import { Component, ViewChild } from '@angular/core';
import { Card, CardsService } from '../../services/cards.service';

@Component({
    selector: 'nc-card-search-view',
    templateUrl: './card-search-view.component.html',
    styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent {
    cards: Card[];
    selectedCard: Card;
    query: string;
    isSearching = false;

    @ViewChild('#search-box') searchBox;

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

    cardSelected(card: Card) {
        this.cards = null;
        this.selectedCard = card;
        this.searchBox.blur();
    }
}
