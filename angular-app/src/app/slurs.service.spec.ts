import { TestBed, async } from '@angular/core/testing';

import { SlursService } from './slurs.service';

import { HttpClientModule }    from '@angular/common/http';

describe('SlursService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ HttpClientModule ]
    });
    TestBed.compileComponents();
    // .compileComponents();
  }));

  it('should be created', () => {
    const service: SlursService = TestBed.get(SlursService);
    expect(service).toBeTruthy();
  });
});
