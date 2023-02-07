import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klg-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {

}
