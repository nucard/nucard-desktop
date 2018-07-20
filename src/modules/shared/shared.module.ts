import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { ClickOnEnterDirective } from './directives/click-on-enter.directive';
import { UrlOpenerService } from './services/url-opener.service';
import { ElectronService } from './services/electron.service';
import { IfElectronDirective } from './directives/if-electron.directive';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    breaks: true
                }
            }
        }),
    ],
    declarations: [
        ClickOnEnterDirective,
        IfElectronDirective,
    ],
    exports: [
        ClickOnEnterDirective,
        IfElectronDirective,
        MarkdownModule,
    ],
    providers: [
        ElectronService,
        UrlOpenerService,
    ]
})
export class SharedModule { }
