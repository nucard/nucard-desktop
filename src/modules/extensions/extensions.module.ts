import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ExtensionsComponent } from './components/extensions/extensions.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [ExtensionsComponent],
    exports: [ExtensionsComponent],
})
export class ExtensionsModule { }
