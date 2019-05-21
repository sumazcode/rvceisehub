import { TestBed } from '@angular/core/testing';

import { FacultyDetailsService } from './faculty-details.service';

describe('FacultyDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyDetailsService = TestBed.get(FacultyDetailsService);
    expect(service).toBeTruthy();
  });
});
