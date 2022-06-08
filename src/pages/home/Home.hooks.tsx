import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as movieActions } from '../../storage/reducers/movies.reducer';
import {
	getTopRatedMovies,
	getTopRatedTvSeries,
	searchMovies,
	searchTvSeries,
} from '../../api/movies.api';
import { SelectChangeEvent } from '@mui/material';
import { GlobalState } from '../../interfaces/state.interface';

export const useHome = () => {
	const dispatch = useDispatch();
	const [movieType, setMovieType] = useState('movie');
	const [query, setQuery] = useState('');
	const [searchAction, setSearchAction] = useState('clear');
	const [currentMovie, setCurrentMovie]: any = useState(null);
	const { topRatedMovies, topRatedTvSeries, movieSearch, tvSearch } =
		useSelector((state: GlobalState) => state.movies);

	const init = (): void => {
		dispatch(movieActions.setMovieType(movieType));

		if (!topRatedMovies.movies) {
			dispatch(getTopRatedMovies(1));
		}
		if (!topRatedTvSeries.movies) {
			dispatch(getTopRatedTvSeries(1));
		}

		if (movieSearch.movies) {
			setCurrentMovie(movieSearch);
		}
		if (tvSearch.movies) {
			setCurrentMovie(tvSearch);
		}
	};

	const movieTypeAction = (page: number): void => {
		if (movieType === 'movie') {
			dispatch(searchMovies({ query, page }));
		}
		if (movieType === 'tv') {
			dispatch(searchTvSeries({ query, page }));
		}
	};

	const selectMovieType = (event: SelectChangeEvent): void => {
		setMovieType(event.target.value as string);
	};

	const handleQueryChangeHook = (q: string): void => {
		setQuery(q);
	};

	const search = (): void => {
		setSearchAction('search');
		movieTypeAction(1);
	};

	const clear = (): void => {
		setSearchAction('clear');
		setMovieType('movie');
		setQuery('');
		setCurrentMovie(null);
	};

	const getMovieType = () => movieType;

	const getSearchAction = () => searchAction;

	const getCurrentMovie = () => currentMovie;

	return {
		init,
		movieTypeAction,
		selectMovieType,
		handleQueryChangeHook,
		search,
		clear,
		getMovieType,
		getSearchAction,
		getCurrentMovie,
	};
};
