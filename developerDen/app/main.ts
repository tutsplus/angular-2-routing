import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { myRouterProviders } from './app.routes';

bootstrap(AppComponent, [myRouterProviders]);
