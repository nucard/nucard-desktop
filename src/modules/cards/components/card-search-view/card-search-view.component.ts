import { Component } from '@angular/core';
import { Card, CardsService } from '../../services/cards.service';

@Component({
    selector: 'nucard-card-search-view',
    templateUrl: './card-search-view.component.html',
    styleUrls: ['./card-search-view.component.scss']
})
export class CardSearchViewComponent {
    cards: Card[];
    query: string;

    constructor(private cardsService: CardsService) { }

    async onQueryChanged() {
        if (this.query && this.query.length > 2) {
            this.cards = await this.cardsService.search(this.query);
        }
    }
}
