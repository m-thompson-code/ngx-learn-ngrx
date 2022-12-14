import { TestBed } from '@angular/core/testing';

import { NgxLearnNgrxService } from './ngx-learn-ngrx.service';

describe('NgxLearnNgrxService', () => {
  let service: NgxLearnNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLearnNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
