// vendors
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// utils
import { buildURL } from '@utils/url.utils';

// model
import { Trailer } from '@model/trailer.model';
import { mapTrailer } from '@model/trailer.mapper';

@Injectable({
  providedIn: 'root'
})
export class TrailersService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getTrendingMovies = (movieId: number, preCallback: () => void) => {
    const url = buildURL({ endpoint: 'trailers', params: { movieId }});

    preCallback();

    return this.http.get<Trailer[]>(url, this.httpOptions).pipe(
      map(mapTrailer)
    );
  }
}
