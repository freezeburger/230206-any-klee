import { Component, Inject } from '@angular/core';
import { AppDispatcher } from '../../core/interfaces/app-dispacther';
import { APP_DISPATCHER } from '../../core/tokens/app-dispatcher.token';

@Component({
  selector: 'app-page-message',
  templateUrl: './page-message.component.html',
  styleUrls: ['./page-message.component.scss']
})
export class PageMessageComponent {
 
  constructor(
    @Inject(APP_DISPATCHER) public dispatcher:AppDispatcher
  ){}
  
}
