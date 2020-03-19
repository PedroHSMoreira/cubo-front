import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: string
  @Input() showTip: boolean = true

  input: any

  @ContentChild(FormControlName, { static: false }) control: FormControlName

  ngOnInit() { }

  ngAfterContentInit() {
    this.input = this.control
    if (this.control === undefined) {
      throw new Error('This component needs to be used with the FormControlName directive')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
