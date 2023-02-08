import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[klgPausable]'
})
export class PausableDirective {

  pause = false;
  layer:any = this.renderer.createElement('div');

  constructor(
    private renderer:Renderer2
  ) { }

  ngOnInit(){
    console.warn(this.layer)
    this.renderer.setStyle(this.layer, 'background-color', 'rgba(0, 0, 0, 0.5)');
    this.renderer.setStyle(this.layer, 'position', 'absolute');
    this.renderer.setStyle(this.layer, 'top', '0');
    this.renderer.setStyle(this.layer, 'width', '100vw');
    this.renderer.setStyle(this.layer, 'height', '100vh');
    this.renderer.setStyle(this.layer, 'z-index', '1000');
  }

  @HostListener('window:keydown.alt.p')
  togglePause(){
    this.pause = ! this.pause;
    this.updatePauseLayer();
  }

  updatePauseLayer(){
    if(this.pause){
      this.renderer.appendChild(document.body,this.layer);
    }else{
      this.renderer.removeChild(document.body,this.layer); 
    }
  }

}
