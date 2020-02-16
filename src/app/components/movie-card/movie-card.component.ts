// vendors
import { Component, Input, HostListener, OnInit } from '@angular/core';

// constants
import { APP_BREAKPOINT } from '@constants/constants';

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

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isApp = window.innerWidth <  APP_BREAKPOINT;
  }
}
