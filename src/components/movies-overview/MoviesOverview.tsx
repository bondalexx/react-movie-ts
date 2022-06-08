import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MovieCard } from '../movie/Movie';
import { Movie, MovieType } from '../../interfaces/movie.interface';
import { HomeStyles } from '../../pages/home/Home.styles';
import { Spinner } from '../spinner/Spinner';
import { useMovieOverview } from './MoviesOverview.hooks';
import { GlobalState } from '../../interfaces/state.interface';

export const MoviesOverview: any = ({
	movieType,
}: {
	movieType: MovieType;
}) => {
	const homeStyles = HomeStyles;
	const navigate = useNavigate();
	const { generalMovieType } = useSelector(
		(state: GlobalState) => state.movies
	);
	const homeMoviesHook = useMovieOverview(movieType);
	const movies = homeMoviesHook.currentHomeMoviesObject()?.movies;
	const movieTypeHook = homeMoviesHook.currentHomeMoviesObject()?.movieType;

	const onShowAll = (movieType: MovieType): void => {
		navigate(`/${movieType.type}`, { replace: true, state: { movieType } });
	};

	if (!movies) {
		return <Spinner />;
	}

	return (
		!movies.loading && (
			<Box>
				<Box sx={homeStyles.titleShowMoreBox}>
					<Typography variant='h4'>{movieTypeHook!.name}</Typography>
					<Button variant='text' onClick={() => onShowAll(movieTypeHook!)}>
						Show all
					</Button>
				</Box>
				<Box sx={homeStyles.movieList}>
					{generalMovieType &&
						movies.movies.results.map((movie: Movie) => (
							<MovieCard
								key={movie.id}
								movie={movie}
								movieImageSizes={{ width: 140, height: 210 }}
								movieType={movieType.type}
							/>
						))}
				</Box>
			</Box>
		)
	);
};
