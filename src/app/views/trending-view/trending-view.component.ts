// vendors
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  isFetching: boolean;
  error: boolean;
  success: boolean;
  movies: Movie[] = [];
  errorDescription: string = formatText('errors-trendingPageErrorDesc');
  errorTitle: string = formatText('errors-trendingPageErrorTitle');
  emptyTitle: string = formatText('errors-trendingPageEmptyTitle');

  searchValueSubscription: Subscription;
  currentPage = this.moviesService.currentPage;
  searchValue = this.moviesService.currentSearchValue;
  totalPages = this.moviesService.totalPages;

  constructor(private moviesService: MoviesService) {
  }

  get emptyDescription() {
    return formatText('errors-trendingPageEmptyDesc', [ this.searchValue ]);
  }

  ngOnInit(): void {
    this.searchValueSubscription = this. moviesService.getSearchValue().subscribe(this.onSearchValueChange);
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.searchValueSubscription.unsubscribe();
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
