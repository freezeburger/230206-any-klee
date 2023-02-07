import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { NgImportModule } from '../ng-import.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
