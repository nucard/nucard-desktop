import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../../services/cards.service';
import { NgxKeyboardEventsService, NgxKeyCode, NgxKeyboardEvent } from 'ngx-keyboard-events';

@Component({
    selector: 'nc-card-result',
    templateUrl: './card-result.component.html',
    styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent implements OnInit {
    @Input() cards: Card[];
    @Output() selectedCardChange = new EventEmitter<Card>();
    private _selectedCard: Card;
    private _hoveredCardIndex: number = null;
    hoveredCard: Card;

    constructor(private keyboardEventsService: NgxKeyboardEventsService) { }

    ngOnInit() {
        this.keyboardEventsService.onKeyPressed.subscribe((key: NgxKeyboardEvent) => {
            if (!this.cards || !this.cards.length) {
                return;
            }

            if (!this._hoveredCardIndex) {
                this._hoveredCardIndex = 0;
            }

            if (key.code === NgxKeyCode.NumPadEnter || key.code === NgxKeyCode.Return) {
                this.cardClick(this.hoveredCard);
            } else if (key.code === NgxKeyCode.DownArrow) {
                this._hoveredCardIndex = this.getIncrementedHoverIndex(this._hoveredCardIndex);
                this.hoveredCard = this.cards[this._hoveredCardIndex];
            } else if (key.code === NgxKeyCode.UpArrow) {
                this._hoveredCardIndex = this.getDecrementedHoverIndex(this._hoveredCardIndex);
                this.hoveredCard = this.cards[this._hoveredCardIndex];
            }
        });
    }

    getDecrementedHoverIndex(currentIndex: number) {
        if (!currentIndex || currentIndex === 0) {
            return this.cards.length - 1;
        }

        return --currentIndex;
    }

    getIncrementedHoverIndex(currentIndex: number) {
        console.log('increment', currentIndex);
        if (currentIndex >= this.cards.length - 1) {
            return 0;
        }

        return ++currentIndex;
    }

    cardClick(card: Card) {
        this._selectedCard = card;
        this.selectedCardChange.emit(card);
    }
}
