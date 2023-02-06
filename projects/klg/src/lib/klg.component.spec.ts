import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlgComponent } from './klg.component';

describe('KlgComponent', () => {
  let component: KlgComponent;
  let fixture: ComponentFixture<KlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
