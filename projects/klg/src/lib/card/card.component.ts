import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'klg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  open = false;

}
