import { TestBed, inject } from '@angular/core/testing';

import { UrlOpenerService } from './url-opener.service';

describe('UrlOpenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlOpenerService]
    });
  });

  it('should be created', inject([UrlOpenerService], (service: UrlOpenerService) => {
    expect(service).toBeTruthy();
  }));
});
