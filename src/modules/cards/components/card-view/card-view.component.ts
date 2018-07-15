import { Component, OnInit, Input } from '@angular/core';
import { NcCard, NcPrinting, NcRulesSymbol } from '@nucard/models/dist';
import { NgxKeyboardEventsService, NgxKeyCode } from 'ngx-keyboard-events';
import { CardsService } from '../../services/cards.service';

@Component({
    selector: 'nc-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
    @Input() card: NcCard;
    _selectedPrinting: NcPrinting;
    public rulesSymbols: NcRulesSymbol[];
    private _selectedPrintingIndex = 0;

    constructor(
        private cardsService: CardsService,
        private keyboardEventsService: NgxKeyboardEventsService) { }

    async ngOnInit() {
        this.setSelectedPrinting(this.card.printings[0]);
        this
            .cardsService
            .getRulesSymbols()
            .subscribe(symbols => this.rulesSymbols = symbols);

        if (this.card.printings.length <= 1) {
            return;
        }

        this.keyboardEventsService.onKeyPressed.subscribe(key => {
            if (key.code === NgxKeyCode.RightArrow) {
                this.setSelectedPrintingIndex(this._selectedPrintingIndex + 1);
            }

            if (key.code === NgxKeyCode.LeftArrow) {
                this.setSelectedPrintingIndex(this._selectedPrintingIndex - 1);
            }
        });
    }

    setSelectedPrinting(printing) {
        this._selectedPrinting = printing;

        for (let i = 0; i < this.card.printings.length; i++) {
            if (this.card.printings[i].printedIn === printing.printedIn) {
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
