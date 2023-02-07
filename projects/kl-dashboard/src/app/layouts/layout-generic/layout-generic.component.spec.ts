import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGenericComponent } from './layout-generic.component';

describe('LayoutGenericComponent', () => {
  let component: LayoutGenericComponent;
  let fixture: ComponentFixture<LayoutGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
