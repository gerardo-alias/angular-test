import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('TrendingMoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
