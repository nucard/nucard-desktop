import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlOpenerService } from './services/url-opener.service';
import { ElectronService } from './services/electron.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ElectronService,
        UrlOpenerService,
    ]
})
export class SharedModule { }
