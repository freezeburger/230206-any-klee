import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { NgImportModule } from '../ng-import.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    NgImportModule,
    ButtonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
