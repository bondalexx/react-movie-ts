import { Grid, Pagination, Stack, Typography } from '@mui/material';

import { Movie, MoviesResponse } from '../../interfaces/movie.interface';
import { MovieCard } from '../movie/Movie';
import { Spinner } from '../spinner/Spinner';
import { useMovieList } from './MovieList.hooks';
import { MovieListStyles } from './MovieList.styles';

export const MovieList = ({
	movies,
	loading,
	movieType,
	pageClickHandler,
}: {
	movies: MoviesResponse;
	loading: boolean;
	movieType: any;
	pageClickHandler: any;
}) => {
	const movieImageSizes = { width: 180, height: 250 };
	const movieListStyles = MovieListStyles;
	const movieListHook = useMovieList(movieType);
	const pageTitle = movieListHook.getPageTitle();

	const onPageClick = (event: any, currentPage: number): void => {
		movieListHook.pageClick(event, currentPage, pageClickHandler);
	};

	return !loading && movies ? (
		<Grid
			container
			key={movieType}
			sx={movieListStyles.grid}
			direction='column'
		>
			<Typography variant='h4'>{pageTitle}</Typography>
			<Grid
				container
				spacing={2}
				sx={[
					movieListStyles.grid,
					{
						height:
							movieType.type === 'search'
								? 'calc(100vh - 320px)'
								: 'calc(100vh - 230px)',
						overflowY: 'auto',
					},
				]}
				direction='row'
			>
				{movies.results.map((movie: Movie) => (
					<Grid item key={movie.id}>
						<MovieCard
							movie={movie}
							movieImageSizes={movieImageSizes}
							movieType={movieType}
						/>
					</Grid>
				))}
			</Grid>

			<Grid
				container
				sx={[movieListStyles.grid, movieListStyles.paginationGrid]}
				direction='row'
				justifyContent='center'
			>
				<Stack>
					<Pagination
						size='large'
						count={movies.total_pages}
						page={movies.page}
						onChange={e => onPageClick(e, movies.page)}
					/>
				</Stack>
			</Grid>
		</Grid>
	) : (
		<Grid
			container
			spacing={2}
			sx={movieListStyles.grid}
			direction='row'
			justifyContent='center'
		>
			<Spinner />
		</Grid>
	);
};
