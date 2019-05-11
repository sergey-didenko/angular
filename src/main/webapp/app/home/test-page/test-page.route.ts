import {Route} from '@angular/router';
import {TestPageComponent} from './test-page.component';

export const TestPageRoute: Route = {
    path: 'test-page',
    component: TestPageComponent,
    data: {
        authorities: [],
        pageTitle: 'home.test-page.title'
    }
};
