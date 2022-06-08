import { User } from './account.interface';
import { MoviesResponse } from './movie.interface';

interface MoviesState {
	movies: MoviesResponse;
	loading: boolean;
}

interface MovieState {
	movie: MoviesResponse;
	loading: boolean;
}

interface SnackbarState {
	isVisible: boolean;
	text: string;
	type: any;
}

export interface GlobalState {
	movies: {
		topRatedMovies: MoviesState;
		topRatedTvSeries: MoviesState;
		popularMovies: MoviesState;
		popularTvSeries: MoviesState;
		upcomingMovies: MoviesState;
		movie: MovieState;
		tvSerie: MovieState;
		movieSearch: MoviesState;
		tvSearch: MoviesState;
		generalMovieType: string;
	};
	theme: { theme: string };
	auth: {};
	account: {
		user: User;
		favoriteMovies: MoviesState;
		favoriteTvSeries: MoviesState;
	};
	snackbar: SnackbarState;
}
