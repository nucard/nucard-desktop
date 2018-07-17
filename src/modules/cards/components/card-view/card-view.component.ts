import { Component, OnInit, Input } from '@angular/core';
import {
    NcCard,
    NcFaction,
    NcPrinting,
    NcRulesSymbol,
    NcExternalInfoProvider
} from '@nucard/models';
import { NgxKeyboardEventsService, NgxKeyCode } from 'ngx-keyboard-events';
import { mergeMap } from 'rxjs/operators';
import { CardsService } from '../../services/cards.service';

@Component({
    selector: 'nc-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
    @Input() card: NcCard;
    buyAt: NcExternalInfoProvider[] = [];
    viewOn: NcExternalInfoProvider[] = [];
    _selectedPrinting: NcPrinting;
    faction: NcFaction;
    private _selectedPrintingIndex = 0;

    constructor(
        private keyboardEventsService: NgxKeyboardEventsService,
        private cardsService: CardsService) { }

    async ngOnInit() {
        this.setSelectedPrinting(this.card.printings[0]);

        if (this.card.printings.length <= 1) {
            return;
        }

        this.keyboardEventsService.onKeyPressed.subscribe(key => {
            let newIndex = this._selectedPrintingIndex;

            if (key.code === NgxKeyCode.RightArrow) {
                newIndex++;
                this.setSelectedPrintingIndex(this._selectedPrintingIndex + 1);
            }

            if (key.code === NgxKeyCode.LeftArrow) {
                newIndex--;
                this.setSelectedPrintingIndex(this._selectedPrintingIndex - 1);
            }

            // mod because js is insane
            newIndex = ((this.card.printings.length) + this.card.printings.length) % newIndex;
            this.setSelectedPrinting(newIndex);
        });
    }

    setSelectedPrinting(printing) {
        this._selectedPrinting = printing;

        for (let i = 0; i < this.card.printings.length; i++) {
            if (this.card.printings[i].printedIn === printing.printedIn) {
                this._selectedPrintingIndex = i;
            }
        }

        // pull data from external info providers
        this
            .cardsService
            .getExternalInfoProviders(this.card.id)
            .subscribe(providers => {
                this.buyAt = providers.filter(p => p.price);
                this.viewOn = providers.filter(p => !p.price);
            });

        // faction data
        this
            .cardsService
            .getFactions()
            .pipe(mergeMap(extensionFactions => extensionFactions.map(ef => ef.factions)))
            // .pipe(extensionFactions => mergeMap(ef => ef.factions))
            .subscribe(factions => {
                this.faction = factions.find(f => f.id === this.card.factionId);
            });
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
