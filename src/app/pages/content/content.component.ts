import { Component, OnInit } from '@angular/core';
import { PartService } from '../services/part.service';
import { Participation } from '../models/participation.model';
import { take } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/snackbar/services/notification.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  participations: Participation[]
  labels: string[]
  data: number[]

  constructor(private partService: PartService, private notification: NotificationService) { }

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

  addNewPart(part: Participation) {
    let total = this.participations.map(el => Number(el.participation)).reduce((prev, value) => prev + value, 0)
    if ((total + Number(part.participation)) > 100) {
    } else {
      this.partService.create(part).subscribe(part => {
        this.notification.notify(`${part.firstName} ${part.lastName} is added!`)
        this.participations.push(part)
      })
    }
  }

}
