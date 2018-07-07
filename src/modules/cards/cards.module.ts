import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMdModule } from 'ngx-md';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { KeyboardEventsModule } from '../keyboard-events/keyboard-events.module';
import { CardsService } from './services/cards.service';

import { CardCostComponent } from './components/card-cost/card-cost.component';
import { CardResultComponent } from './components/card-result/card-result.component';
import { CardSearchViewComponent } from './components/card-search-view/card-search-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxMdModule.forRoot(),
        AppMaterialModule,
        AppRoutingModule,
        KeyboardEventsModule,
    ],
    declarations: [
        CardCostComponent,
        CardResultComponent,
        CardSearchViewComponent,
        CardViewComponent
    ],
    providers: [CardsService]
})
export class CardsModule { }
