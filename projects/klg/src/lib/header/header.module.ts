import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { NgImportModule } from '../ng-import.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
