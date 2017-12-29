import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule
  ],
  exports:[
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule
  ],
  declarations: []
})
export class MatModule { }
