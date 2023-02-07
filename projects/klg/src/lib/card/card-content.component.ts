import { Component, Host, Optional } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'klg-card-content',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: []
})
export class CardContentComponent {
  
  constructor( @Optional() @Host() card:CardComponent){
    if(!card) throw Error(' "CardContentComponent" must be used in a "CardComponent" ');
  }

}
