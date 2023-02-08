import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { DispatcherService } from '../dispatcher/dispatcher.service';
import { MessageService } from '../services/message.service';

@Injectable()
export class MessageMiddlewareService {

  constructor(
    private dispacther:DispatcherService,
    private messageService:MessageService,
  ) { 
    console.warn('MessageMiddlewareService');

    dispacther.action$
              .pipe(filter( action => action.type === 'GET_MESSAGES'))
              .subscribe(
                async action => {
                 const updatedMessages = await messageService.getMessages();
                 console.log(updatedMessages);
                 dispacther.dispatch({type: 'NEW_MESSAGES', payload:updatedMessages})
                }
              )
  }


}
