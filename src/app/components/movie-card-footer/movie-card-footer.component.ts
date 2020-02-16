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

  favButtonText: string = formatText('movieCard-fav');
  trailerButtonText: string = formatText('movieCard-viewTrailer');

  constructor() { }

  ngOnInit(): void {
  }

}
