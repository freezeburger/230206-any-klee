import { Component, Host, Optional } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'klg-card-title',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: []
})
export class CardTitleComponent {

  constructor( @Optional() @Host() card:CardComponent){
    if(!card) throw Error(' "CardTitleComponent" must be used in a "CardComponent" ');
  }

}
