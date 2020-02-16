// vendors
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// model
import { Movie } from '@model/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Observable<Movie[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
