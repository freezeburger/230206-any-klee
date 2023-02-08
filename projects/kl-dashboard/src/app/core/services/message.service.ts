import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  public get online(){
    return window.navigator.onLine;
  }

  constructor() { 
    console.warn('MessageService')
  }

  async getMessages(){
    return [
      {
        id:1,
        level:2,
        content:'Hello World',
        title:'First Message',
        timestamp:Date.now()
      },
      {
        id:2,
        level:2,
        content:'Hola',
        title:'Second Message',
        timestamp:Date.now()
      }
    ];
  }

  
}
