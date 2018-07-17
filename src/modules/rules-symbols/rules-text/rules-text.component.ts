import { Component, Input, OnInit } from '@angular/core';
import { NcRulesSymbol } from '@nucard/models';
import { CardsService } from '../../cards/services/cards.service';

@Component({
    selector: 'nc-rules-text',
    templateUrl: './rules-text.component.html',
    styleUrls: ['./rules-text.component.scss']
})
export class RulesTextComponent implements OnInit {
    @Input() text: string;
    public rulesSymbols: NcRulesSymbol[];

    constructor(private cardsService: CardsService) { }

    ngOnInit() {
        this
            .cardsService
            .getRulesSymbols()
            .subscribe(symbols => this.rulesSymbols = symbols);
    }
}
