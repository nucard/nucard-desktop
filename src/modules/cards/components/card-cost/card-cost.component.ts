import { Component, Input, OnInit } from '@angular/core';
import { NcCard, NcRulesSymbol } from '@nucard/models/dist';
import { CardsService } from '../../services/cards.service';
import { RulesSymbolsService } from '../../../rules-symbols/rules-symbols.service';

@Component({
    selector: 'nc-card-cost',
    templateUrl: './card-cost.component.html',
    styleUrls: ['./card-cost.component.scss']
})
export class CardCostComponent implements OnInit {
    @Input() card: NcCard;
    public resolvedCosts: NcRulesSymbol[] = [];
    public costString: string;

    constructor(
        private cardsService: CardsService,
        private rulesSymbolService: RulesSymbolsService) { }

    ngOnInit() {
        this
            .cardsService
            .getRulesSymbols()
            .subscribe(symbols => {
                this.costString = this.rulesSymbolService.renderSymbols(this.card.cost, symbols);
            });
    }
}
