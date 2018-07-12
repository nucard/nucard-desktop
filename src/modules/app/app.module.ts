import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Electron
import { WebviewDirective } from './directives/webview.directive';

// app routing
import { AppRoutingModule } from './app-routing.module';

// app shared
import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

// app modules and components
import { CardsModule } from '../cards/cards.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { OptionsModule } from '../options/options.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        AppMenuComponent,
        WebviewDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppMaterialModule,
        AppRoutingModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
        CardsModule,
        OptionsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
