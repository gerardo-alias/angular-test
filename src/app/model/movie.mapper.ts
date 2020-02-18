// constants
import { MOVIE_OVERVIEW_MAX_LENGTH, MOVIE_TITLE_MAX_LENGTH } from '@constants/constants';

// utils
import { getDataElement, limitTextLength } from '@utils/commons.utils';
import { buildPosterURL } from '@utils/url.utils';

// model
import { Movie, TrendingMoviesResponse } from '@model/movie.model';

const formatOverview = (title: string = ''): string => limitTextLength( MOVIE_OVERVIEW_MAX_LENGTH, title);

const formatTitle = (title: string = ''): string => limitTextLength(MOVIE_TITLE_MAX_LENGTH, title);

const mapMovies = (moviesData: Record<string, any>[]): Movie[] => {
  return moviesData.map((trendingMovie: Record<string, any>): Movie => ({
    hasTrailer: getDataElement(trendingMovie, 'video', false),
    id: getDataElement(trendingMovie, 'id', -1),
    overview: formatOverview(getDataElement(trendingMovie, 'overview', '')),
    posterPath: buildPosterURL(getDataElement(trendingMovie, 'poster_path', '')),
    title: formatTitle(getDataElement(trendingMovie, 'title', ''))
  }));
};

export const mapTrendingMovies = (trendingMovies: Record<string, any> = {}, searchValue: string = ''): TrendingMoviesResponse => {
  const page = getDataElement(trendingMovies, 'page', 0);
  const totalPages = getDataElement(trendingMovies, 'total_pages', 0);

  return {
    movies: mapMovies(getDataElement(trendingMovies, 'results', [])),
    page,
    totalPages,
    searchValue
  };
};
