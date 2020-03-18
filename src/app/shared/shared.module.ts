import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [InputComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    InputComponent
  ]
})
export class SharedModule { }
