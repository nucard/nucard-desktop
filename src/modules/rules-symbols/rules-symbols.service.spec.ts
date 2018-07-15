import { TestBed, inject } from '@angular/core/testing';

import { RulesSymbolsService } from './rules-symbols.service';

describe('RulesSymbolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RulesSymbolsService]
    });
  });

  it('should be created', inject([RulesSymbolsService], (service: RulesSymbolsService) => {
    expect(service).toBeTruthy();
  }));
});
