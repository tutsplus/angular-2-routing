import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  
    <div  class="navbar-collapse collapse navbar-inverse">
      
      <a class="navbar-brand">Developer Den</a>

      <ul class="nav navbar-nav">
        <li ><a routerLink="/home" routerLinkActive="menu">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="menu">About</a></li>
        <li><a routerLink="/admin/list" routerLinkActive="menu">Admin Area</a></li>
      </ul>

    </div>

    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
