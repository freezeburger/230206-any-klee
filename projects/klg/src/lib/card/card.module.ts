import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { NgImportModule } from '../ng-import.module';
import { ButtonModule } from '../button/button.module';
import { CardTitleComponent } from './card-title.component';
import { CardContentComponent } from './card-content.component';



@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent
  ],
  imports: [
    NgImportModule,
    ButtonModule
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent
  ]
})
export class CardModule { }
