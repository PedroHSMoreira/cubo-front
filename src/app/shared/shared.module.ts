import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [InputComponent, SnackbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    InputComponent,
    SnackbarComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
