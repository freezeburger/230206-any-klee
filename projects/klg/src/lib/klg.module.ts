import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { ContainerModule } from './container/container.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ImageModule } from './image/image.module';
import { InputModule } from './input/input.module';
import { MenuModule } from './menu/menu.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
  ],
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
export class KlgModule { }
