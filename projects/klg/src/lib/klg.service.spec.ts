import { TestBed } from '@angular/core/testing';

import { KlgService } from './klg.service';

describe('KlgService', () => {
  let service: KlgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
