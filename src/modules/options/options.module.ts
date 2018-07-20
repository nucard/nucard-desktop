import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { ExtensionsModule } from '../extensions/extensions.module';
import { OptionsComponent } from './options.component';
import { AutoLaunchService } from './services/auto-launch.service';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        AppRoutingModule,
        ExtensionsModule,
    ],
    declarations: [OptionsComponent],
    providers: [AutoLaunchService],
    exports: [OptionsComponent],
})
export class OptionsModule { }
