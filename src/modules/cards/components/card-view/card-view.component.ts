import { Component, HostListener, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, CardPrinting } from '../../services/cards.service';
import { KeyboardEventsService, KeyCode } from '../../../keyboard-events/keyboard-events.service';

@Component({
    selector: 'nc-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
    @Input() card: Card;
    _selectedPrinting: CardPrinting;
    private _selectedPrintingIndex = 0;

    constructor(
        private route: ActivatedRoute,
        private keyboardEventsService: KeyboardEventsService) { }

    ngOnInit() {
        this.setSelectedPrinting(this.card.printings[0]);

        this.keyboardEventsService.onKeyPressed.subscribe(key => {
            if (key === KeyCode.RightArrow) {
                this.setSelectedPrintingIndex(this._selectedPrintingIndex + 1);
            }

            if (key === KeyCode.LeftArrow) {
                this.setSelectedPrintingIndex(this._selectedPrintingIndex - 1);
            }
        });
    }

    setSelectedPrinting(printing) {
        this._selectedPrinting = printing;

        for (let i = 0; i < this.card.printings.length; i++) {
            if (this.card.printings[i].setCode === printing.setCode) {
                this._selectedPrintingIndex = i;
            }
        }
    }

    private setSelectedPrintingIndex(index) {
        if (index < 0) {
            index = this.card.printings.length - 1;
        } else if (index >= this.card.printings.length) {
            index = 0;
        }

        this.setSelectedPrinting(this.card.printings[index]);
    }
}
