import { Component, OnInit } from '@angular/core';
import { DevService } from '../shared/dev.service';
import {Dev} from '../shared/dev';
import {  Router }    from '@angular/router';

@Component({
    selector: 'list',
    templateUrl: 'app/pages/devAdmin/list/list.html'
})
export class ListComponent implements OnInit { 
    devs: Dev[];

    constructor ( public _devService: DevService, public router: Router ) {}

    chooseDev(dev){
        this.router.navigate(['admin/detail', dev.id]);  
    }

    
    ngOnInit() { 
        this._devService.getDevs().then(devs => this.devs = devs);
    }
}
