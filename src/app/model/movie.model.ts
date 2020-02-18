export interface Movie {
  hasTrailer: boolean;
  id: number;
  overview: string;
  posterPath: string;
  title: string;
}

export interface TrendingMoviesResponse {
  page: number;
  totalPages: number;
  movies: Movie[];
  searchValue?: string;
}
