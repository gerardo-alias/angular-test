// vendors
import { Component, Input, OnInit } from '@angular/core';

// utils
import { formatText } from '@utils/i18n.utils';

@Component({
  selector: 'app-movie-card-footer',
  templateUrl: './movie-card-footer.component.html',
  styleUrls: ['./movie-card-footer.component.scss']
})
export class MovieCardFooterComponent implements OnInit {
  @Input() onClickTrailer: () => void;
  @Input() onClickAddToFavs: () => void;
  @Input() isFav: boolean;

  trailerButtonText: string = formatText('movieCard-viewTrailer');

  constructor() { }

  get favButtonText(): string {
    return !this.isFav ? formatText('movieCard-fav') : formatText('movieCard-removeFav');
  }

  ngOnInit(): void {
  }

}
