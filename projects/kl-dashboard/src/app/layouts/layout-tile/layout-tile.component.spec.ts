import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTileComponent } from './layout-tile.component';

describe('LayoutTileComponent', () => {
  let component: LayoutTileComponent;
  let fixture: ComponentFixture<LayoutTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
