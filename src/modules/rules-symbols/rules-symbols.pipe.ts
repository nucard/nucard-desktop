import { Pipe, PipeTransform } from '@angular/core';
import { RulesSymbolsService } from './rules-symbols.service';
import { NcRulesSymbol } from '@nucard/models/dist';

@Pipe({ name: 'rulesSymbols' })
export class RulesSymbolsPipe implements PipeTransform {
    constructor(private rulesSymbolsService: RulesSymbolsService) { }

    transform(value: string, rulesSymbols: NcRulesSymbol[]): string {
        if (rulesSymbols && rulesSymbols.length) {
            return this.rulesSymbolsService.renderSymbols(value, rulesSymbols);
        }
        return value;
    }
}
