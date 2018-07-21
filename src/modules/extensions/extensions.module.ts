import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { ExtensionsComponent } from './components/extensions/extensions.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        SharedModule,
    ],
    declarations: [ExtensionsComponent],
    exports: [ExtensionsComponent],
})
export class ExtensionsModule { }
