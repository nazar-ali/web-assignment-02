import { TestBed } from '@angular/core/testing';

import { BbcEndPointService } from './bbc-end-point.service';

describe('BbcEndPointService', () => {
  let service: BbcEndPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbcEndPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
