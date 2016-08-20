import { provideRouter, RouterConfig }  from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { DetailComponent } from '../detail/detail.component';
import { ListComponent } from '../list/list.component';
import { LoginComponent } from '../login/login.component';

import { DevService} from './dev.service';

export const devAdminRoutes: RouterConfig = [
    {
    path: 'admin',
    component: AdminComponent,
    children: [
        { path: 'detail/:id',  component: DetailComponent },
        { path: 'list',     component: ListComponent, canActivate:[DevService]}, 
        { path: 'login',     component: LoginComponent }
    ]
    }
];

export const loginProviders = [ DevService];
