import { TestBed } from '@angular/core/testing';

import { HrmsService } from './hrms.service';

describe('HrmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrmsService = TestBed.get(HrmsService);
    expect(service).toBeTruthy();
  });
});
