import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClickOnEnterDirective } from './directives/click-on-enter.directive'
import { UrlOpenerService } from './services/url-opener.service';
import { ElectronService } from './services/electron.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    declarations: [ClickOnEnterDirective],
    exports: [ClickOnEnterDirective],
    providers: [
        ElectronService,
        UrlOpenerService,
    ]
})
export class SharedModule { }
