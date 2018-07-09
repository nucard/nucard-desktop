import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickOnEnterDirective } from './directives/click-on-enter.directive'
import { UrlOpenerService } from './services/url-opener.service';
import { ElectronService } from './services/electron.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ClickOnEnterDirective],
    exports: [ClickOnEnterDirective],
    providers: [
        ElectronService,
        UrlOpenerService,
    ]
})
export class SharedModule { }
