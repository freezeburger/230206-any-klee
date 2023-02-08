import { Directive,  HostBinding, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[klgZoom]'
})
export class ZoomDirective {

  @Input() klgZoom = 1.1;

  @HostBinding('attr.title') title = "This element is zoomable";

  @HostBinding('style.transform') transform = "scale(1)";
  @HostBinding('style.transition') transition = "transform 0.4s ease";

  constructor() {}

  @HostListener('mouseenter',['$event'])
  zoomIn( evt:any ){
    this.transform = `scale(${this.klgZoom})`
  }

  @HostListener('mouseleave',['$event'])
  zoomOut(  evt:any ){
    this.transform = `scale(1)`
  }

}


