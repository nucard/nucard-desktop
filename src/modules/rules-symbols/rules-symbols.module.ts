import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesSymbolsDirective } from './rules-symbols.directive';
import { RulesSymbolsService } from './rules-symbols.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [RulesSymbolsDirective],
    exports: [RulesSymbolsDirective],
    providers: [RulesSymbolsService],
})
export class RulesSymbolsModule { }
