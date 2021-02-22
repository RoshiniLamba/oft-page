import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmiCalComponent } from './emi-cal.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmiCalComponent],
  imports: [
    CommonModule,
    Ng5SliderModule,
    FormsModule
  ],
  exports: [EmiCalComponent]
})
export class EmiCalModule { }
