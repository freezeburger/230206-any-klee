import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutGenericComponent } from './layout-generic/layout-generic.component';
import { LayoutTileComponent } from './layout-tile/layout-tile.component';
import { LayoutTwoColumnComponent } from './layout-two-column/layout-two-column.component';

@NgModule({
  declarations: [
    LayoutGenericComponent,
    LayoutTileComponent,
    LayoutTwoColumnComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LayoutGenericComponent,
    LayoutTileComponent,
    LayoutTwoColumnComponent
  ]
})
export class LayoutsModule { }
