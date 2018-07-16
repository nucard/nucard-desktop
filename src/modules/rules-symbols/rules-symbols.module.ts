import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesSymbolsService } from './rules-symbols.service';
import { RulesSymbolsPipe } from './rules-symbols.pipe';
import { RulesTextComponent } from './rules-text/rules-text.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        RulesSymbolsPipe,
        RulesTextComponent,
    ],
    exports: [
        RulesSymbolsPipe,
        RulesTextComponent,
    ],
    providers: [RulesSymbolsService],
})
export class RulesSymbolsModule { }
