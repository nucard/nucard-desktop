import { Injectable } from '@angular/core';
import { NcRulesSymbol } from '@nucard/models';

@Injectable({
    providedIn: 'root'
})
export class RulesSymbolsService {
    public renderSymbols(input: string, ruleSymbols: NcRulesSymbol[]) {
        if (!input) {
            return input;
        }

        let result = input;

        for (const ruleSymbol of ruleSymbols) {
            result = result.replace(ruleSymbol.symbol, ` ![cost](${ruleSymbol.image})`);
        }

        return result;
    }
}
