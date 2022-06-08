import { Grid } from '@mui/material';
import { useEffect } from 'react';

import { MovieType } from '../../../interfaces/movie.interface';
import { MoviesOverview } from '../../../components/movies-overview/MoviesOverview';
import { useMovies } from './Movies.hooks';
import { HomeStyles } from '../../home/Home.styles';

export const Movies: React.FC = () => {
	const { init, currentMoviesTypeObject } = useMovies();

	const homeStyles = HomeStyles;

	useEffect(() => {
		init();
	}, [init]);

	return (
		<Grid container spacing={2} sx={homeStyles.grid}>
			{currentMoviesTypeObject()?.map((movieType: MovieType) => (
				<Grid item xs={12} key={movieType.type}>
					<MoviesOverview movieType={movieType} />
				</Grid>
			))}
		</Grid>
	);
};
