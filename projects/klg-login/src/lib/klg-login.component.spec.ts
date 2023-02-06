import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlgLoginComponent } from './klg-login.component';

describe('KlgLoginComponent', () => {
  let component: KlgLoginComponent;
  let fixture: ComponentFixture<KlgLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlgLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
