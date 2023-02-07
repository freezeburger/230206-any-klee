import { NgModule } from '@angular/core';
import { KlgImportModule } from './klg-import.module';
import { NgImportModule } from './ng-import.module';


@NgModule({
  exports: [
    NgImportModule,
    KlgImportModule
  ]
}) 
export class SharedModule { }
