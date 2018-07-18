import { TestBed, inject } from '@angular/core/testing';

import { SearchResultViewModelsService } from './search-result-view-models.service';

describe('SearchResultViewModelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchResultViewModelsService]
    });
  });

  it('should be created', inject([SearchResultViewModelsService], (service: SearchResultViewModelsService) => {
    expect(service).toBeTruthy();
  }));
});
