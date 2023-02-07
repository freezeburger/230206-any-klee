import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwoColumnComponent } from './layout-two-column.component';

describe('LayoutTwoColumnComponent', () => {
  let component: LayoutTwoColumnComponent;
  let fixture: ComponentFixture<LayoutTwoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwoColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTwoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
