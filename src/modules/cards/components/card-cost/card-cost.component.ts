import { Component, Input, OnInit } from '@angular/core';
import { NcCard, NcRulesSymbol } from '@nucard/models';
import { CardsService } from '../../services/cards.service';

@Component({
    selector: 'nc-card-cost',
    templateUrl: './card-cost.component.html',
    styleUrls: ['./card-cost.component.scss']
})
export class CardCostComponent implements OnInit {
    @Input() card: NcCard;
    public resolvedCosts: NcRulesSymbol[] = [];

    constructor(private cardsService: CardsService) { }

    ngOnInit() {
        this
            .cardsService
            .getRulesSymbols()
            .subscribe(symbols => {
                this.resolveCostSymbols(symbols);
            });
    }

    private resolveCostSymbols(symbols: NcRulesSymbol[]) {
        if (!this.card.cost) {
            return [];
        }

        const symbolStrings = this.card.cost.match(/\{[^\}]\}/);
        const retVal = [];

        for (const symbol of symbolStrings) {
            retVal.push(symbols.find(s => `{${s.symbol}}` === `${symbol}`);
        }

        this.resolvedCosts = retVal;
    }
}
