import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { CardContentComponent } from './card-content.component';
import { CardTitleComponent } from './card-title.component';

@Component({
  selector: 'klg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent implements AfterContentInit {

  open = false;

  @ContentChild(CardTitleComponent) title:CardTitleComponent | null = null;
  @ContentChild(CardContentComponent) content:CardContentComponent | null = null;

  ngAfterContentInit(){
    // console.log( {title:this.title,  content:this.content} );
    // console.log('%c Cher(e) développeur(euse) lite cette erreur','color:green')
    if(!this.title || !this.content) throw Error('"CardComponent"\'s content must be passed as "CardTitleComponent" and "CardContentComponent" ');
  }

}
