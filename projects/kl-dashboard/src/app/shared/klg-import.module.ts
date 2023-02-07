import { NgModule } from '@angular/core';
import { 
    ButtonModule, 
    CardModule, 
    ContainerModule, 
    FooterModule, 
    HeaderModule, 
    ImageModule, 
    InputModule, 
    MenuModule 
} from 'klg';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ContainerModule,
    FooterModule,
    HeaderModule,
    ImageModule,
    InputModule,
    MenuModule
  ]
})
export class KlgImportModule { }
