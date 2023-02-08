import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppAction, AppDispatcher, AppState } from '../interfaces/app-dispacther';

const initialState:AppState = {
  messages:[
  ]
}

@Injectable()
export class DispatcherService implements AppDispatcher{

  constructor() { }

  state$ = new BehaviorSubject<AppState>(initialState);
  action$ = new BehaviorSubject<AppAction>({type:'APP_INIT', payload:null});

  dispatch(action: any): unknown {
    console.log(action);
    this.action$.next(action);

    if(action.type === 'NEW_MESSAGES') this.state$.next( {messages:action.payload} )

    return;
  }
  
}
