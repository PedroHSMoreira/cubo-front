import { Component, OnInit } from '@angular/core';
import { PartService } from '../services/part.service';
import { Participation } from '../models/participation.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  participations: Participation[]
  labels: string[]
  data: number[]

  constructor(private partService: PartService) { }

  ngOnInit() {
    this.get()
  }

  get() {
    this.partService.getAll().pipe(take(1))
      .subscribe(part => {
        this.participations = part
        this.labels = part.map(val => `${val.firstName} ${val.lastName}`)
        this.data = part.map(val => val.participation)
      })
  }

  addNewPart(part) {
    console.log(part)
    this.participations.push(part)
  }

}
