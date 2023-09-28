import { TestBed } from '@angular/core/testing';

import { CancioneroService } from './cancionero.service';

describe('CancioneroService', () => {
  let service: CancioneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancioneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
