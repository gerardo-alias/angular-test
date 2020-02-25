// vendors
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// services
import { TrailersService } from '@services/trailers.service';

// model
import { Trailer } from '@model/trailer.model';

@Component({
  selector: 'app-trailer-view',
  templateUrl: './trailer-view.component.html',
  styleUrls: ['./trailer-view.component.scss']
})
export class TrailerViewComponent implements OnInit {
  movieId: number;
  movieName: string;
  isFetching: boolean;
  success: boolean;
  error: boolean;
  trailersData: Trailer[];

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private trailersService: TrailersService
  ) { }

  handleGoBack = (): void => {
    this.location.back();
  }

  handleRequest = (): void => {
    this.isFetching = true;
    this.success = false;
    this.error = false;
    this.trailersData = [];
  }

  handleRequestError = (): void => {
    this.isFetching = false;
    this.error = true;
  }

  handleRequestSucess = (trailerData: Trailer[]): void => {
    this.isFetching = false;
    this.success = true;
    this.trailersData = trailerData;
  }

  ngOnInit(): void {
    this.movieId = parseInt(this.activeRoute.snapshot.paramMap.get('movieId'), 10);
    this.movieName = this.activeRoute.snapshot.paramMap.get('movieName');

    this.trailersService.getTrendingMovies(this.movieId, this.handleRequest)
      .subscribe(this.handleRequestSucess, this.handleRequestError);
  }

}
