import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxKeyboardEventsModule } from 'ngx-keyboard-events';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { RulesSymbolsModule } from '../rules-symbols/rules-symbols.module';
import { SharedModule } from '../shared/shared.module';
import { CardsService } from './services/cards.service';
import { SearchResultViewModelsService } from './services/search-result-view-models.service';

import { CardSearchViewComponent } from './components/card-search-view/card-search-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ExternalInfoProviderComponent } from './components/external-info-provider/external-info-provider.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
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
        CardSearchViewComponent,
        CardViewComponent,
        ExternalInfoProviderComponent,
        SearchResultsComponent,
        SearchBoxDirective,
    ],
    providers: [
        CardsService,
        SearchResultViewModelsService,
    ]
})
export class CardsModule { }
