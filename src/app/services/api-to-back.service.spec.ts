import { TestBed } from '@angular/core/testing';

import { ApiToBackService } from './api-to-back.service';

describe('ApiToBackService', () => {
  let service: ApiToBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiToBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
