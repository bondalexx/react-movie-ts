import { useSelector } from 'react-redux';

import { MovieType } from '../../interfaces/movie.interface';
import { GlobalState } from '../../interfaces/state.interface';

export const useMovieOverview = (movieType: MovieType) => {
	const {
		topRatedMovies,
		popularMovies,
		upcomingMovies,
		topRatedTvSeries,
		popularTvSeries,
	} = useSelector((state: GlobalState) => state.movies);

	const currentHomeMoviesObject = () => {
		if (movieType.type === 'top_rated') {
			return { movies: topRatedMovies, movieType };
		}
		if (movieType.type === 'popular') {
			return { movies: popularMovies, movieType };
		}
		if (movieType.type === 'upcoming') {
			return { movies: upcomingMovies, movieType };
		}
		if (movieType.type === 'tv_top_rated') {
			return { movies: topRatedTvSeries, movieType };
		}
		if (movieType.type === 'tv_popular') {
			return { movies: popularTvSeries, movieType };
		}
	};

	return { currentHomeMoviesObject };
};
