import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { NgImportModule } from '../ng-import.module';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
