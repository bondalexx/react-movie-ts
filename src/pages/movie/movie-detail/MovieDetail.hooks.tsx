import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import {
	getMovieById,
	getTvSeriesById,
	markAsFavorite,
} from '../../../api/movies.api';
import { User } from '../../../interfaces/account.interface';
import { GlobalState } from '../../../interfaces/state.interface';
import { actions as movieActions } from '../../../storage/reducers/movies.reducer';

export const useMovieDetail = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const location = useLocation();
	const type = location.pathname.includes('movie') ? 'movie' : 'tv';
	const session_id = localStorage.getItem('session_id');
	const movie: any = useSelector(
		(state: GlobalState) => state.movies.movie.movie
	);
	const tvSerie: any = useSelector(
		(state: GlobalState) => state.movies.tvSerie.movie
	);
	const user: User = useSelector((state: GlobalState) => state.account.user);

	const init = (): void => {
		dispatch(movieActions.setMovieType(type));

		if (!movie && type === 'movie') {
			dispatch(getMovieById(id));
		}
		if (!tvSerie && type === 'tv') {
			dispatch(getTvSeriesById(id));
		}
	};

	const onMarkAsFavorite = (): void => {
		dispatch(
			markAsFavorite({
				session_id,
				account_id: user.id,
				media_type: type,
				media_id: type === 'tv' ? tvSerie.id : movie.id,
				favorite: true,
			})
		);
	};

	const currentMovieDetailObject = () => {
		if (type === 'movie') {
			return {
				movies: movie,
			};
		}
		if (type === 'tv') {
			return {
				movies: tvSerie,
			};
		}
	};

	return { init, onMarkAsFavorite, currentMovieDetailObject };
};
