import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [InputComponent],
  imports: [
    ChartsModule,
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    InputComponent,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
