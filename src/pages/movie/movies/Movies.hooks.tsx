import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
	getTopRatedMovies,
	getPopularMovies,
	getUpcomingMovies,
	getTopRatedTvSeries,
	getPopularTvSeries,
} from '../../../api/movies.api';
import {
	MOVIES_TYPES,
	TV_SERIES_TYPES,
} from '../../../constants/movie-type.constant';
import { GlobalState } from '../../../interfaces/state.interface';
import { actions } from '../../../storage/reducers/movies.reducer';

export const useMovies = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const type = location.pathname.includes('movie') ? 'movie' : 'tv';
	const {
		topRatedMovies,
		popularMovies,
		upcomingMovies,
		topRatedTvSeries,
		popularTvSeries,
	} = useSelector((state: GlobalState) => state.movies);

	const init = (): void => {
		dispatch(actions.setMovieType(type));

		if (
			type === 'movie' &&
			(!topRatedMovies.movies ||
				!popularMovies.movies ||
				!upcomingMovies.movies)
		) {
			dispatch(getTopRatedMovies(1));
			dispatch(getPopularMovies(1));
			dispatch(getUpcomingMovies(1));
		}

		if (
			type === 'tv' &&
			(!topRatedTvSeries.movies || !popularTvSeries.movies)
		) {
			dispatch(getTopRatedTvSeries(1));
			dispatch(getPopularTvSeries(1));
		}
	};

	const currentMoviesTypeObject = () => {
		if (type === 'movie') {
			return MOVIES_TYPES;
		}
		if (type === 'tv') {
			return TV_SERIES_TYPES;
		}
	};

	return { init, currentMoviesTypeObject };
};
