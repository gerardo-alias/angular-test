// vendors
import { Component, OnInit } from '@angular/core';

// model
import { Movie, TrendingMoviesResponse } from '@model/movie.model';

// services
import { MoviesService } from '@services/movies.service';

// utils
import { formatText } from '@utils/i18n.utils';

@Component({
  selector: 'app-trending-view',
  templateUrl: './trending-view.component.html',
  styleUrls: ['./trending-view.component.scss']
})
export class TrendingViewComponent implements OnInit {
  currentPage = 1;
  totalPages = 1;
  isFetching: boolean;
  error: boolean;
  success: boolean;
  movies: Movie[] = [];
  searchValue = '';
  errorDescription: string = formatText('errors-trendingPageErrorDesc');
  errorTitle: string = formatText('errors-trendingPageErrorTitle');
  emptyTitle: string = formatText('errors-trendingPageEmptyTitle');

  constructor(private moviesService: MoviesService) {
    moviesService.getSearchValue()
      .subscribe(this.onSearchValueChange);
  }

  get emptyDescription() {
    return formatText('errors-trendingPageEmptyDesc', [ this.searchValue ]);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies = (): void => {
    this.moviesService.getTrendingMovies(this.currentPage, this.onStartLoading, this.searchValue)
      .subscribe(this.onLoadSuccess, this.onLoadError);
  }

  onSearchValueChange = (searchValue: string): void => {
    if (this.searchValue !== searchValue) {
      this.currentPage = 1;
      this.totalPages = 1;
      this.searchValue = searchValue;
      this.getMovies();
    }
  }

  onStartLoading = (): void => {
    this.isFetching = true;
    this.success = false;
    this.error = false;
    this.movies = [];
  }

  onLoadSuccess = (moviesData: TrendingMoviesResponse): void => {
    this.isFetching = false;
    this.success = true;
    this.movies = moviesData.movies;
    this.totalPages = moviesData.totalPages;
  }

  onLoadError = (): void => {
    this.error = true;
    this.isFetching = false;
  }

  handleClickPrev = (): void => {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.getMovies();
    }
  }

  handleClickNext = (): void => {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.getMovies();
    }
  }
}
