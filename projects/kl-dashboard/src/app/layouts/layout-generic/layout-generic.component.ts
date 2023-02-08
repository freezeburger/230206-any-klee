import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-generic',
  templateUrl: './layout-generic.component.html',
  styleUrls: ['./layout-generic.component.scss']
})
export class LayoutGenericComponent {

  @Input() pageTitle = "Generic Page";

  constructor(
    private titleService: Title,
    private router: Router
  ) {}

  get navLinks(){
    return this.router.config
                .filter( ({path}) => path !== '**')
                .map(({path}) => path );
  }

  ngOnChanges() {
    this.titleService.setTitle(this.pageTitle);
  }

}
