import { Component, Inject } from '@angular/core';
import { AppDispatcher } from '../../core/interfaces/app-dispacther';
import { APP_DISPATCHER } from '../../core/tokens/app-dispatcher.token';

@Component({
  selector: 'app-feat-message',
  templateUrl: './feat-message.component.html',
  styleUrls: ['./feat-message.component.scss']
})
export class FeatMessageComponent {
  
  constructor(
    @Inject(APP_DISPATCHER) public dispatcher:AppDispatcher
  ){}
  
}
