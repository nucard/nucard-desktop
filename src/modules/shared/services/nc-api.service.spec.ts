import { TestBed, inject } from '@angular/core/testing';

import { NcApiService } from './nc-api.service';

describe('NcApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NcApiService]
    });
  });

  it('should be created', inject([NcApiService], (service: NcApiService) => {
    expect(service).toBeTruthy();
  }));
});
