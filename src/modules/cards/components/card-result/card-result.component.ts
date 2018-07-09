import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../services/cards.service';

@Component({
    selector: 'nc-card-result',
    templateUrl: './card-result.component.html',
    styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent {
    @Input() cards: Card[];
    @Output() selectedCardChange = new EventEmitter<Card>();
    private _selectedCard: Card;
    private _hoveredCardIndex: number = null;
    hoveredCard: Card;

    cardClick(card: Card) {
        console.log('card click', card);
        this._selectedCard = card;
        this.selectedCardChange.emit(card);
    }
}
