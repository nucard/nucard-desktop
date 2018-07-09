import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Card, CardsService } from '../../services/cards.service';
import { SearchBoxDirective } from '../../directives/search-box.directive';

@Component({
    selector: 'nc-card-search-view',
    templateUrl: './card-search-view.component.html',
    styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent implements AfterViewInit {
    cards: Card[];
    selectedCard: Card;
    query: string;
    isSearching = false;

    @ViewChild(SearchBoxDirective) searchBox: SearchBoxDirective;

    constructor(private cardsService: CardsService) { }

    ngAfterViewInit() {
        console.log('searchbox', this.searchBox);
    }

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
        console.log('this.searchbox', this.searchBox);
        this.searchBox.blur();
    }
}
