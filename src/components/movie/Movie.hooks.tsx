import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	getMovieById,
	getTvSeriesById,
	markAsFavorite,
} from '../../api/movies.api';
import { User } from '../../interfaces/account.interface';
import { Movie } from '../../interfaces/movie.interface';
import { GlobalState } from '../../interfaces/state.interface';

export const useMovie = (movie: Movie) => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const session_id = localStorage.getItem('session_id');
	const { generalMovieType } = useSelector(
		(state: GlobalState) => state.movies
	);
	const user: User = useSelector((state: GlobalState) => state.account.user);

	const movieClick = (): void => {
		if (generalMovieType === 'tv') {
			dispatch(getTvSeriesById(movie.id));
			navigation(`/tv/${movie.id}`);
		}
		if (generalMovieType === 'movie') {
			dispatch(getMovieById(movie.id));
			navigation(`/movie/${movie.id}`);
		}
	};

	const markAsFavoriteHanlder = (): void => {
		dispatch(
			markAsFavorite({
				session_id,
				account_id: user.id,
				media_type: generalMovieType,
				media_id: movie.id,
				favorite: false,
			})
		);
	};

	return { markAsFavoriteHanlder, movieClick };
};
