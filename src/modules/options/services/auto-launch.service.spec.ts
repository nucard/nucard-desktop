import { TestBed, inject } from '@angular/core/testing';

import { AutoLaunchService } from './auto-launch.service';

describe('AutoLaunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoLaunchService]
    });
  });

  it('should be created', inject([AutoLaunchService], (service: AutoLaunchService) => {
    expect(service).toBeTruthy();
  }));
});
