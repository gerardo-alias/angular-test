// vendors
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// services
import { FavoritesService } from '@services/favorites.service';

// utils
import { formatText } from '@utils/i18n.utils';

// model
import { Movie } from '@model/movie.model';

@Component({
  selector: 'app-favs-view',
  templateUrl: './favs-view.component.html',
  styleUrls: ['./favs-view.component.scss']
})
export class FavsViewComponent implements OnInit {
  emptyDescription = formatText('favorites-emptyDescription');
  emptyTitle = formatText('favorites-emptyTitle');
  headerTitle = formatText('favorites-headerTitle');

  constructor(
    private location: Location,
    private favoritesService: FavoritesService
  ) { }

  get favs(): Movie[] {
    return this.favoritesService.favs;
  }

  ngOnInit(): void {
  }

  handleGoBack = (): void => {
    this.location.back();
  }
}
