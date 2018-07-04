import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';

import { CardResultComponent } from './components/card-result/card-result.component';
import { CardSearchViewComponent } from './components/card-search-view/card-search-view.component';
import { CardsService } from './services/cards.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppMaterialModule,
    ],
    declarations: [
        CardResultComponent,
        CardSearchViewComponent
    ],
    providers: [CardsService]
})
export class CardsModule { }
