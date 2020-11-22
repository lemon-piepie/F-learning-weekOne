import { TestBed } from '@angular/core/testing';
import { ApiToBackService } from './api-to-back.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ApiToBackService', () => {
  let service: ApiToBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(ApiToBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});