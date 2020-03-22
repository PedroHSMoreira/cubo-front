import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PartService } from '../services/part.service';
import { Participation } from '../models/participation.model';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() addPart = new EventEmitter<Participation>()

  participationForm: FormGroup

  constructor(private fb: FormBuilder, private partService: PartService) { }

  ngOnInit() {
    this.participationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      participation: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    })
  }


  subForm(value: Participation) {
    this.addPart.emit(value)
    this.participationForm.reset()
  }
}
