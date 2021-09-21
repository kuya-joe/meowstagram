import { TestBed } from '@angular/core/testing';

import { CatpicsService } from './catpics.service';

describe('CatpicsService', () => {
  let service: CatpicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatpicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
