import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveGexampleGuard } from './resolve-gexample.guard';

describe('ResolveGexampleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveGexampleGuard]
    });
  });

  it('should ...', inject([ResolveGexampleGuard], (guard: ResolveGexampleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
