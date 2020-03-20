import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PartService } from '../services/part.service';
import { Participation } from '../models/participation.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopBarComponent implements OnInit {

participationForm: FormGroup

  constructor(private fb: FormBuilder, private partService: PartService) { }

  ngOnInit() {
    this.participationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      participation: ['', [Validators.required]]
    })
  }


  subForm(value: Participation) {
    this.partService.create(value).subscribe(part => console.log(part))
    this.participationForm.reset()
  }
}
