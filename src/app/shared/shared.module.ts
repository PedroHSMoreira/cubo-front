import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [InputComponent, SnackbarComponent],
  imports: [
    ChartsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    SnackbarComponent,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
