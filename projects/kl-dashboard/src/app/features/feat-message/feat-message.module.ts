import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeatMessageComponent } from './feat-message.component';


@NgModule({
  declarations: [
    FeatMessageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatMessageComponent
  ],
})
export class FeatMessageModule { }
