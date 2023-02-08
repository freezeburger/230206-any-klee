import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppAction, AppDispatcher, AppState } from '../interfaces/app-dispacther';

const initialState:AppState = {
  messages:[
    {
      id:1,
      level:2,
      content:'Hello World',
      title:'First Message',
      timestamp:Date.now()
    }
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
    return;
  }
  
}
