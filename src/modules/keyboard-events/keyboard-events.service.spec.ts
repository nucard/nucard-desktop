import { TestBed, inject } from '@angular/core/testing';

import { KeyboardEventsService } from './keyboard-events.service';

describe('KeyboardEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardEventsService]
    });
  });

  it('should be created', inject([KeyboardEventsService], (service: KeyboardEventsService) => {
    expect(service).toBeTruthy();
  }));
});
