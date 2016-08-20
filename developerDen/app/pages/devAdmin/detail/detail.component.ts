import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {Dev} from '../shared/dev';
import { DevService } from '../shared/dev.service';

@Component({
  selector: 'detail',
  templateUrl: 'app/pages/devAdmin/detail/detail.html'  
})
export class DetailComponent implements OnInit{
    dev: Dev;

    constructor( private route: ActivatedRoute, private router: Router,private _devService: DevService) {}

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this._devService.getOne(id).then(dev => this.dev = dev);
    }
}
