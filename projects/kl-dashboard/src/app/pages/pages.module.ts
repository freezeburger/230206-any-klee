import { NgModule } from '@angular/core';
import { LayoutsModule } from '../layouts/layouts.module';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageMessageComponent } from './page-message/page-message.component';
import { PageInfosComponent } from './page-infos/page-infos.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageLoginComponent,
    PageMessageComponent,
    PageInfosComponent
  ],
  imports: [
    SharedModule,
    LayoutsModule,
    FeaturesModule
  ],
  exports: [
    PageHomeComponent,
    PageLoginComponent,
    PageMessageComponent,
    PageInfosComponent
  ]
})
export class PagesModule { }
