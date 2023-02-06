import { TestBed } from '@angular/core/testing';

import { KlgLoginService } from './klg-login.service';

describe('KlgLoginService', () => {
  let service: KlgLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlgLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
