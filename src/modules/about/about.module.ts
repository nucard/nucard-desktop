import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
    ],
    declarations: [AboutComponent]
})
export class AboutModule { }
