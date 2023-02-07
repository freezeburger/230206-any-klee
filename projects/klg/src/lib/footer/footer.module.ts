import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { NgImportModule } from '../ng-import.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
