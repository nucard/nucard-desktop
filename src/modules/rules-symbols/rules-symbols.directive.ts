import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import { NcRulesSymbol } from '@nucard/models';
import { RulesSymbolsService } from './rules-symbols.service';

@Directive({
    selector: '[ncRulesSymbols]'
})
export class RulesSymbolsDirective implements OnChanges {
    @Input('ncRulesSymbols') rulesSymbols: NcRulesSymbol[];

    constructor(
        private elementRef: ElementRef,
        private rulesSymbolsService: RulesSymbolsService) { }

    ngOnChanges() {
        if (!this.rulesSymbols) {
            return;
        }

        this.elementRef.nativeElement.innerHTML = this.rulesSymbolsService.renderSymbols(this.elementRef.nativeElement.innerHTML, this.rulesSymbols);
    }
}
