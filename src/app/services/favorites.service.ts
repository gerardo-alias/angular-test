import { Injectable } from '@angular/core';

// model
import { Movie } from '@model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favs: Movie[] = [];

  constructor() {
    this.onInit();
  }

  private onInit = (): void => {
    const storedFavs = localStorage.getItem('favs');

    if (storedFavs) {
      this.favs = JSON.parse(storedFavs);
    } else {
      this.favs = [];
      this.storeFavs();
    }
  }

  private storeFavs = (): void => {
    localStorage.setItem('favs', JSON.stringify(this.favs));
  }

  private getFav = (favId: number): Movie => (
    this.favs.find((favMovie: Movie) => favMovie.id === favId)
  )

  addFav = (movie: Movie): void => {
    if (!this.getFav(movie.id)) {
      this.favs.push(movie);
      this.storeFavs();
    }
  }

  removeFav = (movieId: number): void => {
    this.favs = this.favs.filter((favMovie: Movie): boolean => favMovie.id !== movieId);
    this.storeFavs();
  }
}
