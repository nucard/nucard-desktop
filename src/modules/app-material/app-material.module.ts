import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
} from '@angular/material';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
    ],
    declarations: [],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
    ]
})
export class AppMaterialModule { }
