import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { ClickOnEnterDirective } from './directives/click-on-enter.directive';
import { UrlOpenerService } from './services/url-opener.service';
import { ElectronService } from './services/electron.service';

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
    declarations: [ClickOnEnterDirective],
    exports: [
        ClickOnEnterDirective,
        MarkdownModule,
    ],
    providers: [
        ElectronService,
        UrlOpenerService,
    ]
})
export class SharedModule { }
