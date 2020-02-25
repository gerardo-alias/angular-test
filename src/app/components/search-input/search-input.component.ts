// vendors
import { Component, OnInit, Input } from '@angular/core';

// services
import { MoviesService } from '@services/movies.service';

// utils
import { formatText } from '@utils/i18n.utils';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() searchValue: string;
  placeholder: string = formatText('searchInput-placeholder');

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onChangeText = (value: string): void => {
    this.moviesService.setSearchValue(value);
  }
}
