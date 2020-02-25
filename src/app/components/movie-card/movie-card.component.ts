// vendors
import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// constants
import { APP_BREAKPOINT } from '@constants/constants';
import { TRAILERS } from '@constants/routes';

// model
import { Movie } from '@model/movie.model';

// services
import { FavoritesService } from '@services/favorites.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  isApp: boolean;
  defaultImgPath = '/assets/images/film-poster-placeholder.png';
  favImgPath = '/assets/images/fav-full.png';

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {
    this.onResize();
  }

  get isFav(): boolean {
    return Boolean(this.favoritesService.favs
      .find((favMovie: Movie): boolean => favMovie.id === this.movie.id)
    );
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isApp = window.innerWidth <  APP_BREAKPOINT;
  }

  handleClickAddFav = (): void => {
    if (this.isFav) {
      this.favoritesService.removeFav(this.movie.id);
      return;
    }
    this.favoritesService.addFav(this.movie);
  }

  handleClickViewTrailer = (): void => {
    this.router.navigate([ TRAILERS, { movieId: this.movie.id, movieName: this.movie.title } ]);
  }
}
