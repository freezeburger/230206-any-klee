import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';


abstract class CustomValueAccessor implements ControlValueAccessor{
  
  value:any = null

  onChange: any = () => { };
  onTouched: any = () => { };
  disabled = false;

  writeValue(value: any): void {
    if(value!== undefined) this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}

@Component({
  selector: 'klg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InputComponent extends CustomValueAccessor {
    constructor(){
      super();
    }
}



