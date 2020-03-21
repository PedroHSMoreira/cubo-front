import { Component, OnInit } from '@angular/core';
import { Participation } from './models/participation.model';
import { PartService } from './services/part.service';

@Component({
    selector: 'app-pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

    constructor(private partService: PartService) { }

    ngOnInit() { }
}