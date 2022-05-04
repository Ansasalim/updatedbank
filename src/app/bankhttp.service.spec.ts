import { TestBed } from '@angular/core/testing';

import { BankhttpService } from './bankhttp.service';

describe('BankhttpService', () => {
  let service: BankhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
