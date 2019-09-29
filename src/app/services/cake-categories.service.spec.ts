import { TestBed } from '@angular/core/testing';

import { CakeCategoriesService } from './cake-categories.service';

describe('CakeCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CakeCategoriesService = TestBed.get(CakeCategoriesService);
    expect(service).toBeTruthy();
  });
});
