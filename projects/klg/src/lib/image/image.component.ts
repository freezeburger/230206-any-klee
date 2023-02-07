import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const placeholderError =  'https://via.placeholder.com/350x200';

@Component({
  selector: 'klg-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input() source = 'https://via.placeholder.com/350x200';
  @Input() legend = 'Default Legend';

  handleError( error:any ){
    this.source = placeholderError;
  }

}
