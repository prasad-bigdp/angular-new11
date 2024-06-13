import { TestBed } from '@angular/core/testing';

import { ReceipeDataService } from './receipe-data.service';

describe('ReceipeDataService', () => {
  let service: ReceipeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
