import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { NcRulesSymbol } from '@nucard/models';
import { RulesSymbolsService } from './rules-symbols.service';

@Directive({
    selector: '[ncRulesSymbols]'
})
export class RulesSymbolsDirective implements OnInit {
    @Input() symbols: NcRulesSymbol[];

    constructor(
        private elementRef: ElementRef,
        private rulesSymbolsService: RulesSymbolsService) { }

    ngOnInit() {
        this.elementRef.nativeElement.innerHTML = this.rulesSymbolsService.renderSymbols(this.elementRef.nativeElement.innerHTML, symbols);
    }
}
