import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DevService } from '../shared/dev.service';

@Component({
    selector: 'dev-admin',
    template: ` 
        
        <div  class="navbar-collapse collapse navbar-inverse">
            <a class="navbar-brand">Admin Area</a>
            <ul class="nav navbar-nav">
                <li ><a routerLink="/admin/list">Dev List</a></li>
                <li ><a (click)="logoff()">Logout</a></li>
            </ul>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AdminComponent { 

    constructor ( public _devService: DevService ) {}
    logoff(){
        this._devService.logout();
    }
}