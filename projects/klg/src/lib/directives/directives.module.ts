import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomDirective } from './zoom.directive';
import { PausableDirective } from './pausable.directive';



@NgModule({
  declarations: [
    ZoomDirective,
    PausableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZoomDirective,
    PausableDirective
  ]
})
export class DirectivesModule { }
