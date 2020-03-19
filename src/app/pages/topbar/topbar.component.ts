import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopBarComponent implements OnInit {

participationForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.participationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      participation: ['', [Validators.required]]
    })
  }


  subForm(value: any) {
    console.log(value)
    this.participationForm.reset()
  }
}
