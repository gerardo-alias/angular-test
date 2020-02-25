// vendors
import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

// model
import { TrendingMoviesResponse } from '@model/movie.model';
import { mapTrendingMovies } from '@model/movie.mapper';

// constants
import { SEARCH_INPUT_DEBOUNCE_TIME } from '@constants/constants';

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
  searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  // current state: This allows to keep state alive when unmounting a component
  currentPage = 1;
  currentSearchValue = '';
  totalPages = 1;

  constructor(private http: HttpClient) { }

  processPage = (page: number, searchValue: string, data: Record<string, any>): TrendingMoviesResponse => {
    const mappedMoviesData = mapTrendingMovies(data, searchValue);
    this.pagesData[page] = mappedMoviesData;
    this.currentPage = mappedMoviesData.page;
    this.totalPages = mappedMoviesData.totalPages;
    return mappedMoviesData;
  }

  checkPage = (page: number, searchValue: string): boolean => {
    return Boolean(this.pagesData[page] && this.pagesData[page].searchValue === searchValue);
  }

  getSearchValue = () => {
    return this.searchValue
      .asObservable()
      .pipe(debounceTime(SEARCH_INPUT_DEBOUNCE_TIME), distinctUntilChanged());
  }

  setSearchValue = (value: string) => {
    this.currentSearchValue = value;
    this.searchValue.next(value);
  }

  getTrendingMovies = (page: number, preCallback: () => void, searchValue?: string) => {
    const url = !searchValue ?
      buildURL({ endpoint: 'trending', query: { page }}) :
      buildURL({ endpoint: 'search', query: { page, query: searchValue }});

    preCallback();

    if (this.checkPage(page, searchValue)) {
      return of(this.pagesData[page]);
    }

    return this.http.get<TrendingMoviesResponse>(url, this.httpOptions).pipe(
      map(this.processPage.bind(this, page, searchValue))
    );
  }
}
