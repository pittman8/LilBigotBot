import { TestBed, async } from '@angular/core/testing';

import { HelloService } from './hello.service';

import { HttpClientModule }    from '@angular/common/http';



describe('HelloService', () => {
  //beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ HttpClientModule ]
    });
    TestBed.compileComponents();
    // .compileComponents();
  }));

  it('should be created', () => {
    const service: HelloService = TestBed.get(HelloService);
    expect(service).toBeTruthy();
  });
});
