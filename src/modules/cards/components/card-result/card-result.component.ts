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

    cardClick(card: Card) {
        this._selectedCard = card;
        this.selectedCardChange.emit(card);
    }
}
