import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InputComponent {

}
