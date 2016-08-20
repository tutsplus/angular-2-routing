import { Injectable } from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { currentDevs } from './mock-devs';

@Injectable()
export class DevService implements CanActivate {

    userLoggedIn: boolean = false;
    devPromise = Promise.resolve(currentDevs);

    constructor( private router: Router) {}

    login(){
        this.userLoggedIn = true;
    }

    logout(){
        this.userLoggedIn = false; 
        this.router.navigate(['admin/login']);   
    }

    canActivate() {
        if (this.userLoggedIn) { return true; }
        this.router.navigate(['admin/login']);
        return false;
    } 

    getDevs(){
        return this.devPromise;    
    }

    getOne(id: number | string){
         return this.devPromise
            .then(devs => devs.find(dev => dev.id === +id));    
    }
    

}