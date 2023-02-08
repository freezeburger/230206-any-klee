import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  public get online(){
    return window.navigator.onLine;
  }

  constructor() { }

  
}
