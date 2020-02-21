import { TestBed } from '@angular/core/testing';

import { AnnyangService } from './annyang.service';

describe('AnnyangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnyangService = TestBed.get(AnnyangService);
    expect(service).toBeTruthy();
  });
});
