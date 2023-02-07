import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { NgImportModule } from '../ng-import.module';



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
