import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klg-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageComponent {

}
