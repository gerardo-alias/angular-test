// vendors
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// model
import { Trailer } from '@model/trailer.model';

// utils
import { buildTrailerURL } from '@utils/url.utils';
import { formatText } from '@utils/i18n.utils';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() movieId: number;
  @Input() movieName: string;
  @Input() onClickGoBack: () => void;
  @Input() trailersData: Trailer[];
  @Input() error: boolean;
  @Input() isLoading: boolean;
  @Input() success: boolean;

  emptyFailureDescription = formatText('trailers-failureDescription');
  emptyFailureTitle = formatText('trailers-failureTitle');
  emptyNoTrailersDescription = formatText('trailers-noTrailersDescription');
  emptyNoTrailersTitle = formatText('trailers-noTrailersTitle');

  get trailersUrl(): SafeResourceUrl[] {
    const trailersUrls: SafeResourceUrl[] = [];

    this.trailersData.forEach((trailer: Trailer) => {
      const url = buildTrailerURL(trailer.key, trailer.site);
      const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      trailersUrls.push(sanitizedUrl);
    });

    return trailersUrls;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
}
