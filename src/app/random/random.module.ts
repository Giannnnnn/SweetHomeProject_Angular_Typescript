import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberComponent } from './containers/random-number/random-number.component';
import { RandomRoutingModule } from './random.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [RandomNumberComponent],
  imports: [
    CommonModule,
    RandomRoutingModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class RandomModule { }
