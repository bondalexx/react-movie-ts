import { MovieType } from '../interfaces/movie.interface';

export const MOVIES_TYPES: MovieType[] = [
	{ type: 'top_rated', name: 'Top Rated' },
	{ type: 'popular', name: 'Popular' },
	{ type: 'upcoming', name: 'Upcoming' },
];

export const TV_SERIES_TYPES: MovieType[] = [
	{ type: 'tv_top_rated', name: 'Top Rated TV Series' },
	{ type: 'tv_popular', name: 'Popular' },
];

export const TV_SERIES_TYPES_AVAILABLE: MovieType[] = [
	{ type: 'tv_top_rated', name: 'Top Rated TV Series' },
	{ type: 'tv_popular', name: 'Popular' },
	{ type: 'favoriteTvSeries', name: 'Favorite TV Series' },
];

export const MOVIES_TYPES_AVAILABLE: MovieType[] = [
	{ type: 'top_rated', name: 'Top Rated' },
	{ type: 'popular', name: 'Popular' },
	{ type: 'upcoming', name: 'Upcoming' },
	{ type: 'favoriteMovies', name: 'Favorite Movies' },
];
