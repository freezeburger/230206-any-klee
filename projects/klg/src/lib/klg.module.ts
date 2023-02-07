import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
  ],
  exports: [
    HeaderModule,
    ButtonModule
  ]
})
export class KlgModule { }
