import './vendor.ts';

import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';

import { TemplateSharedModule } from 'app/shared';
import { TemplateAppRoutingModule } from './app-routing.module';
import { TemplateHomeModule } from 'app/home';
import * as moment from 'moment';

import { MainComponent, NavbarComponent, FooterComponent, ActiveMenuDirective, ErrorComponent } from './layouts';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Languages } from 'app/shared/language/language.constants';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        Ng2Webstorage.forRoot({ prefix: 'temp', separator: '-' }),
        // configure the imports
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        TemplateSharedModule.forRoot(),
        TemplateHomeModule,
        TemplateAppRoutingModule
    ],
    declarations: [
        MainComponent,
        NavbarComponent,
        ErrorComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [

    ],
    bootstrap: [
        MainComponent
    ]
})
export class TemplateAppModule {
    constructor(private dpConfig: NgbDatepickerConfig,
                private translate: TranslateService) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };

        // default language
        this.translate.setDefaultLang(Languages[0].iso);
    }
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
