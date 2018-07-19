import { Injectable } from '@angular/core';
import { NcRulesSymbol } from '@nucard/models/dist';

@Injectable({
    providedIn: 'root'
})
export class RulesSymbolsService {
    public renderSymbols(input: string, ruleSymbols: NcRulesSymbol[]) {
        if (!input) {
            return input;
        }

        let result = input.toString();

        for (const ruleSymbol of ruleSymbols) {
            // can't use regexes directly here because of potentially unescaped characters in rules symbols
            while (result.indexOf(ruleSymbol.symbol) >= 0) {
                result = result.replace(ruleSymbol.symbol, ` ![rules symbol](${ruleSymbol.image})`);
            }
        }

        return result;
    }
}
