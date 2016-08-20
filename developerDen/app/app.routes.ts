import { provideRouter, RouterConfig }  from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

import { devAdminRoutes, loginProviders } from './pages/devAdmin/shared/dev-admin.routes';

const routes: RouterConfig = [
    ...devAdminRoutes,
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: ErrorComponent }
];

export const myRouterProviders = [
    provideRouter(routes),
    loginProviders
];

