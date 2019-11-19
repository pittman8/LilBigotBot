import { TestBed } from '@angular/core/testing';

import { SlursService } from './slurs.service';

describe('SlursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlursService = TestBed.get(SlursService);
    expect(service).toBeTruthy();
  });
});
