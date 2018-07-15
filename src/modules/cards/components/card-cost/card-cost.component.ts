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
    public rulesSymbols: NcRulesSymbol[] = [];

    constructor(
        private cardsService: CardsService,
        private rulesSymbolService: RulesSymbolsService) { }

    async ngOnInit() {
        this.rulesSymbols = await this.cardsService.getRulesSymbols().toPromise();
    }
}
