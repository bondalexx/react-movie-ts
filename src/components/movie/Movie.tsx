import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import { API_CONFIG } from '../../api/api';
import { Movie } from '../../interfaces/movie.interface';
import { MovieDetailStyles } from '../../pages/movie/movie-detail/MovieDetail.style';
import { useMovie } from './Movie.hooks';

export const MovieCard = ({
	movie,
	movieImageSizes,
	movieType,
}: {
	movie: Movie;
	movieImageSizes: { width: number; height: number };
	movieType: string;
}) => {
	const movieDetailStyles = MovieDetailStyles;
	const movieHook = useMovie(movie);

	const onMovieClick = (): void => {
		movieHook.movieClick();
	};

	const onMarkAsFavorite = (): void => {
		movieHook.markAsFavoriteHanlder();
	};

	return (
		<Box sx={movieDetailStyles.movieBox}>
			<img
				onClick={onMovieClick}
				alt='movie-card'
				width={movieImageSizes.width}
				height={movieImageSizes.height}
				src={
					movie.poster_path
						? API_CONFIG.imageBaseUrl + movie.poster_path
						: require('../../assets/images/movie.png')
				}
			/>
			{movieType === 'favoriteMovies' || movieType === 'favoriteTvSeries' ? (
				<Box sx={movieDetailStyles.favoriteBox} onClick={onMarkAsFavorite}>
					<StarIcon />
				</Box>
			) : null}
		</Box>
	);
};
