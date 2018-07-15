import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesSymbolsService } from './rules-symbols.service';
import { RulesSymbolsPipe } from './rules-symbols.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [RulesSymbolsPipe],
    exports: [RulesSymbolsPipe],
    providers: [RulesSymbolsService],
})
export class RulesSymbolsModule { }
