import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
	getPopularMovies,
	getPopularTvSeries,
	getTopRatedMovies,
	getTopRatedTvSeries,
	getUpcomingMovies,
} from '../../../api/movies.api';

export const useMovieType = () => {
	const {
		topRatedMovies,
		popularMovies,
		upcomingMovies,
		topRatedTvSeries,
		popularTvSeries,
	} = useSelector((state: any) => state.movies);
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const movieType: string = pathname.replace('/', '');

	const init = (): void => {
		if (movieType === 'top_rated' && !topRatedMovies.movies) {
			dispatch(getTopRatedMovies(1));
		}
		if (movieType === 'popular' && !popularMovies.movies) {
			dispatch(getPopularMovies(1));
		}
		if (movieType === 'upcoming' && !upcomingMovies.movies) {
			dispatch(getUpcomingMovies(1));
		}
		if (movieType === 'tv_top_rated' && !topRatedTvSeries.movies) {
			dispatch(getTopRatedTvSeries(1));
		}
		if (movieType === 'tv_popular' && !popularTvSeries.movies) {
			dispatch(getPopularTvSeries(1));
		}
	};

	const pageClickHandler = (pageClicked: number): void => {
		if (movieType === 'top_rated') {
			dispatch(getTopRatedMovies(pageClicked));
		}
		if (movieType === 'popular') {
			dispatch(getPopularMovies(pageClicked));
		}
		if (movieType === 'upcoming') {
			dispatch(getUpcomingMovies(pageClicked));
		}
		if (movieType === 'tv_top_rated') {
			dispatch(getTopRatedTvSeries(pageClicked));
		}
		if (movieType === 'tv_popular') {
			dispatch(getPopularTvSeries(pageClicked));
		}
	};

	const currentMovieTypeObject = () => {
		if (movieType === 'top_rated' && topRatedMovies.movies) {
			return { movies: topRatedMovies, movieType };
		}
		if (movieType === 'popular' && popularMovies.movies) {
			return { movies: popularMovies, movieType };
		}
		if (movieType === 'upcoming' && upcomingMovies.movies) {
			return { movies: upcomingMovies, movieType };
		}
		if (movieType === 'tv_top_rated' && topRatedTvSeries.movies) {
			return { movies: topRatedTvSeries, movieType };
		}
		if (movieType === 'tv_popular' && popularTvSeries.movies) {
			return { movies: popularTvSeries, movieType };
		}
	};

	return {
		init,
		pageClickHandler,
		currentMovieTypeObject,
	};
};
