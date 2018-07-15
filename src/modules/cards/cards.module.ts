import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxKeyboardEventsModule } from 'ngx-keyboard-events';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { RulesSymbolsModule } from '../rules-symbols/rules-symbols.module';
import { SharedModule } from '../shared/shared.module';
import { CardsService } from './services/cards.service';

import { CardCostComponent } from './components/card-cost/card-cost.component';
import { CardResultComponent } from './components/card-result/card-result.component';
import { CardSearchViewComponent } from './components/card-search-view/card-search-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ExternalInfoProviderComponent } from './components/external-info-provider/external-info-provider.component';
import { SearchBoxDirective } from './directives/search-box.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxKeyboardEventsModule,
        AppMaterialModule,
        AppRoutingModule,
        RulesSymbolsModule,
        SharedModule,
    ],
    declarations: [
        CardCostComponent,
        CardResultComponent,
        CardSearchViewComponent,
        CardViewComponent,
        ExternalInfoProviderComponent,
        SearchBoxDirective,
    ],
    providers: [CardsService]
})
export class CardsModule { }
