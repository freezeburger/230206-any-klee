import { Inject, NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_DISPATCHER } from './core/tokens/app-dispatcher.token';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(
    @Optional() @Inject(APP_DISPATCHER) appDispatcher:any
  ){
    console.warn('AppModule', {appDispatcher});
  }

}
