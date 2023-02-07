import { NgModule } from '@angular/core';
import { ImageComponent } from './image.component';
import { NgImportModule } from '../ng-import.module';



@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }
