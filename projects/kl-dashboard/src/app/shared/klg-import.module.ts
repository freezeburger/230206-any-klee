import { NgModule } from '@angular/core';
import { ButtonModule, HeaderModule } from 'klg';


@NgModule({
  exports: [
    HeaderModule,
    ButtonModule
  ]
})
export class KlgImportModule { }
