import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../../services/cards.service';
import { KeyboardEventsService, KeyCode } from '../../../keyboard-events/keyboard-events.service';

@Component({
    selector: 'nc-card-result',
    templateUrl: './card-result.component.html',
    styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent implements OnInit {
    @Input() cards: Card[];
    @Output() selectedCardChange = new EventEmitter<Card>();
    private _selectedCard: Card;
    hoveredCard: Card;

    constructor(private keyboardEventsService: KeyboardEventsService) { }

    ngOnInit() {
        this.keyboardEventsService.onKeyPressed.subscribe(key => {
            if (this.cards && this.cards.length && key === KeyCode.DownArrow) {
                this.hoveredCard = this.cards[0];
            }
        });
    }

    cardClick(card: Card) {
        this._selectedCard = card;
        this.selectedCardChange.emit(card);
    }
}
