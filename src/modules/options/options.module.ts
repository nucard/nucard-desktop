import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { OptionsComponent } from './options.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        AppRoutingModule,
    ],
    declarations: [OptionsComponent],
    exports: [OptionsComponent],
})
export class OptionsModule { }
