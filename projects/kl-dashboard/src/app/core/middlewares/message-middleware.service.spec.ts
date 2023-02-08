import { TestBed } from '@angular/core/testing';

import { MessageMiddlewareService } from './message-middleware.service';

describe('MessageMiddlewareService', () => {
  let service: MessageMiddlewareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageMiddlewareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
