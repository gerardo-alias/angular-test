// vendors
import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// constants
import { APP_BREAKPOINT } from '@constants/constants';
import { TRAILERS } from '@constants/routes';

// model
import { Movie } from '@model/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  isApp: boolean;
  defaultImgPath = '/assets/images/film-poster-placeholder.png';

  constructor(private router: Router) {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isApp = window.innerWidth <  APP_BREAKPOINT;
  }

  handleClickAddFav() {
  }

  handleClickViewTrailer = (): void => {
    this.router.navigate([ TRAILERS, { movieId: this.movie.id, movieName: this.movie.title } ]);
  }
}
