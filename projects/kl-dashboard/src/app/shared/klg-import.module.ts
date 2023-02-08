import { NgModule } from '@angular/core';
import { 
    ButtonModule, 
    CardModule, 
    ContainerModule, 
    DirectivesModule, 
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
    MenuModule,
    DirectivesModule
  ]
})
export class KlgImportModule { }
