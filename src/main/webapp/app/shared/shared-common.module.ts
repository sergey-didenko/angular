import { NgModule } from '@angular/core';

import { TemplateSharedLibsModule } from './';

@NgModule({
    imports: [
        TemplateSharedLibsModule
    ],
    declarations: [

    ],
    exports: [
        TemplateSharedLibsModule,
    ]
})
export class TemplateSharedCommonModule {}
