import { useEffect } from 'react';

import { MovieList } from '../../components/movie-list/MovieList';
import { NoResults } from '../../components/no-results/NoResults';
import { useFavorites } from './Favorites.hooks';

export const Favorites: React.FC = () => {
	const favoritesHook = useFavorites();
	const favoriteMovies = favoritesHook.currentFavoritesObject()?.movies;
	const movieType = favoritesHook.currentFavoritesObject()?.movieType;

	useEffect(() => {
		favoritesHook.init();
	}, [favoritesHook]);

	const pageClickHandler = (pageClicked: number): void => {
		favoritesHook.pageClickHandler(pageClicked);
	};

	return favoriteMovies?.movies?.results.length ? (
		<MovieList
			movies={favoriteMovies.movies}
			loading={favoriteMovies.loading}
			movieType={movieType}
			pageClickHandler={pageClickHandler}
		/>
	) : (
		<NoResults />
	);
};
