import { TestBed, async } from '@angular/core/testing';

import { AnalyticsService } from './analytics.service';

import { HttpClientModule }    from '@angular/common/http';

describe('AnalyticsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ HttpClientModule ]
    });
    TestBed.compileComponents();
    // .compileComponents();
  }));

  it('should be created', () => {
    const service: AnalyticsService = TestBed.get(AnalyticsService);
    expect(service).toBeTruthy();
  });
});
