// vendors
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// model
import { TrendingMoviesResponse } from '@model/movie.model';
import { mapTrendingMovies } from '@model/movie.mapper';

// utils
import { buildURL } from '@utils/url.utils';

interface Pages {
  [key: string]: TrendingMoviesResponse;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  pagesData: Pages = {};
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  processPage = (page: number, data: Record<string, any>): TrendingMoviesResponse => {
    const mappedMoviesData = mapTrendingMovies(data);
    this.pagesData[page] = mappedMoviesData;
    return mappedMoviesData;
  }

  checkPage = (page: number): boolean => Boolean(this.pagesData[page]);

  getTrendingMovies = (page: number, preCallback: () => void) => {
    const url = buildURL({ endpoint: 'trending', query: { page }});

    preCallback();

    if (this.checkPage(page)) {
      return of(this.pagesData[page]);
    }

    return this.http.get<TrendingMoviesResponse>(url, this.httpOptions).pipe(
      map(this.processPage.bind(this, page))
    );
  }
}
