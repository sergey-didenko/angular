import {Routes} from '@angular/router';
import {HomeComponent} from 'app/home/home/home.component';
import {TestPageRoute} from 'app/home/test-page/test-page.route';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title'
        }
    },
    TestPageRoute
];
