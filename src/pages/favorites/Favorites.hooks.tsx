import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getFavoriteMovies, getFavoriteTvSeries } from '../../api/account';
import { User } from '../../interfaces/account.interface';
import { GlobalState } from '../../interfaces/state.interface';
import { actions } from '../../storage/reducers/movies.reducer';

export const useFavorites = () => {
	const dispatch = useDispatch();
	const session_id = localStorage.getItem('session_id');
	const location = useLocation();
	const type = location.pathname.includes('movie') ? 'movie' : 'tv';
	const user: User = useSelector((state: GlobalState) => state.account.user);
	const { favoriteMovies, favoriteTvSeries } = useSelector(
		(state: GlobalState) => state.account
	);

	const movieTypeAction = (page: number): void => {
		if (type === 'movie' && !favoriteMovies.movies) {
			dispatch(getFavoriteMovies({ session_id, account_id: user.id, page }));
		}
		if (type === 'tv' && !favoriteTvSeries.movies) {
			dispatch(
				getFavoriteTvSeries({
					session_id,
					account_id: user.id,
					page,
				})
			);
		}
	};

	const init = (): void => {
		dispatch(actions.setMovieType(type));

		movieTypeAction(1);
	};

	const pageClickHandler = (pageClicked: number): void => {
		movieTypeAction(pageClicked);
	};

	const currentFavoritesObject = () => {
		if (type === 'movie') {
			return {
				movies: favoriteMovies,
				movieType: 'favoriteMovies',
			};
		} else {
			return {
				movies: favoriteTvSeries,
				movieType: 'favoriteTvSeries',
			};
		}
	};

	return {
		init,
		pageClickHandler,
		currentFavoritesObject,
	};
};
