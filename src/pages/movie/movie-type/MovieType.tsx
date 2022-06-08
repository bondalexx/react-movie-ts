import { useEffect } from 'react';

import { MovieList } from '../../../components/movie-list/MovieList';
import { useMovieType } from './MovieType.hooks';

export const MovieTypeComponent: React.FC = () => {
	const movieTypeHook = useMovieType();
	const movies = movieTypeHook.currentMovieTypeObject()?.movies;
	const movieType = movieTypeHook.currentMovieTypeObject()?.movieType;

	useEffect(() => {
		movieTypeHook.init();
	}, [movieTypeHook]);

	const pageClickHandler = (pageClicked: number): void => {
		movieTypeHook.pageClickHandler(pageClicked);
	};

	return (
		movies && (
			<MovieList
				movies={movies.movies}
				loading={movies.loading}
				movieType={movieType}
				pageClickHandler={pageClickHandler}
			/>
		)
	);
};
