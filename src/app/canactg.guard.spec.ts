import { TestBed, async, inject } from '@angular/core/testing';

import { CanactgGuard } from './canactg.guard';

describe('CanactgGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactgGuard]
    });
  });

  it('should ...', inject([CanactgGuard], (guard: CanactgGuard) => {
    expect(guard).toBeTruthy();
  }));
});
