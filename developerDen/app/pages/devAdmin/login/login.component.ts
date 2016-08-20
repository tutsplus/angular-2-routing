import { Component } from '@angular/core';
import {  Router }    from '@angular/router';
import { DevService } from '../shared/dev.service';

@Component({
  selector: 'login',
  templateUrl: 'app/pages/devAdmin/login/login.html'
})
export class LoginComponent { 
    
    constructor( private _devService: DevService, private router: Router){}

    userLogin(){
        this._devService.login();
        if (this._devService.userLoggedIn) {
            this.router.navigate(['/admin/list']);
        }
    }

}

