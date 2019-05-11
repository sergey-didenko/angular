import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TemplateSharedModule } from 'app/shared';
import { HOME_ROUTES } from './';
import {HomeComponent} from 'app/home/home/home.component';
import {TestPageComponent} from 'app/home/test-page/test-page.component';

@NgModule({
    imports: [
        TemplateSharedModule,
        RouterModule.forChild(HOME_ROUTES)
    ],
    declarations: [
        HomeComponent,
        TestPageComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TemplateHomeModule {}
