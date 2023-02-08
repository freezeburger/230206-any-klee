import { NgModule } from '@angular/core';
import { DispatcherService } from './dispatcher/dispatcher.service';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';
import { StorageService } from './services/storage.service';
import { APP_DISPATCHER } from './tokens/app-dispatcher.token';



@NgModule({
  providers: [
    DispatcherService,
    AuthService,
    MessageService,
    StorageService,
    {
      provide:APP_DISPATCHER,
      useExisting:DispatcherService
    }
  ]
})
export class CoreModule { 
  constructor(){
    console.warn('CoreModule')
  }
}
