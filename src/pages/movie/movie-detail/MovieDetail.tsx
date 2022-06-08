import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';

import { API_CONFIG } from '../../../api/api';
import {
	Genre,
	Networks,
	ProductionCompanies,
	ProductionCountries,
} from '../../../interfaces/movie.interface';
import { MovieDetailStyles } from './MovieDetail.style';
import { Spinner } from '../../../components/spinner/Spinner';
import { useMovieDetail } from './MovieDetail.hooks';

export const MovieDetail: React.FC = () => {
	const movieDetail = MovieDetailStyles;
	const movieDetailHook = useMovieDetail();
	const movie: any = movieDetailHook.currentMovieDetailObject()?.movies;

	useEffect(() => {
		movieDetailHook.init();
	}, [movieDetailHook]);

	if (!movie) {
		return <Spinner />;
	}

	return (
		movie && (
			<Box sx={movieDetail.wrapper}>
				<Box sx={movieDetail.firstRow}>
					<Box>
						<img
							alt='movie'
							width={300}
							src={API_CONFIG.imageBaseUrl + movie.poster_path}
						/>
					</Box>
					<Box sx={movieDetail.descriptionWrapper}>
						<Box sx={movieDetail.titleWrapper}>
							<Typography variant='h4'>
								{movie.title || movie.name} (
								{new Date(movie.release_date).getFullYear() ||
									new Date(movie.first_air_date).getFullYear()}
								)
							</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Genre:
							</Typography>
							<Typography component='span'>
								{movie.genres.map((genre: Genre) => genre.name).join(', ')}
							</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Release Date:
							</Typography>
							<Typography component='span'>
								{movie.release_date || movie.first_air_date}
							</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Production Company:
							</Typography>
							<Typography component='span'>
								{movie.production_companies
									.map((pc: ProductionCompanies) => pc.name)
									.join(', ')}
							</Typography>
						</Box>
						{movie.networks ? (
							<Box sx={movieDetail.fieldWrapper}>
								<Typography
									component='span'
									fontWeight={'bold'}
									sx={movieDetail.field}
								>
									Networks:
								</Typography>
								<Typography component='span'>
									{movie.networks
										.map((network: Networks) => network.name)
										.join(', ')}
								</Typography>
							</Box>
						) : null}
						{movie.production_countries.length ? (
							<Box sx={movieDetail.fieldWrapper}>
								<Typography
									component='span'
									fontWeight={'bold'}
									sx={movieDetail.field}
								>
									Production Countries:
								</Typography>
								<Typography component='span'>
									{movie.production_countries
										.map((pc: ProductionCountries) => pc.name)
										.join(', ')}
								</Typography>
							</Box>
						) : null}
						{movie.imdb_id ? (
							<Box sx={movieDetail.fieldWrapper}>
								<Typography
									component='span'
									fontWeight={'bold'}
									sx={movieDetail.field}
								>
									IMDB:
								</Typography>
								<a
									href={`https://www.imdb.com/title/${movie.imdb_id}`}
									target='_blank'
									rel='noreferrer'
								>
									{movie.title}
								</a>
							</Box>
						) : null}
						{movie.homepage ? (
							<Box sx={movieDetail.fieldWrapper}>
								<Typography
									component='span'
									fontWeight={'bold'}
									sx={movieDetail.field}
								>
									Website:
								</Typography>
								<a href={movie.homepage} target='_blank' rel='noreferrer'>
									{movie.networks
										? movie.networks[0].name
										: movie.title
										? movie.title
										: movie.name}
								</a>
							</Box>
						) : null}
						{movie.budget ? (
							<Box sx={movieDetail.fieldWrapper}>
								<Typography
									component='span'
									fontWeight={'bold'}
									sx={movieDetail.field}
								>
									Budget:
								</Typography>
								<Typography component='span'>{movie.budget}$</Typography>
							</Box>
						) : null}
						{movie.revenue ? (
							<Box sx={movieDetail.fieldWrapper}>
								<Typography
									component='span'
									fontWeight={'bold'}
									sx={movieDetail.field}
								>
									Revenue:
								</Typography>
								<Typography component='span'>{movie.revenue}$</Typography>
							</Box>
						) : null}
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Runtime:
							</Typography>
							<Typography component='span'>
								{movie.runtime || movie.episode_run_time[0]} min.
							</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Tagline:
							</Typography>
							<Typography component='span'>{movie.tagline}</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Votes:
							</Typography>
							<Typography component='span'>{movie.vote_count}</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Average vote:
							</Typography>
							<Typography component='span'>{movie.vote_average}</Typography>
						</Box>
						<Box sx={movieDetail.fieldWrapper}>
							<Typography
								component='span'
								fontWeight={'bold'}
								sx={movieDetail.field}
							>
								Popularity:
							</Typography>
							<Typography component='span'>{movie.popularity}</Typography>
						</Box>
						<Box sx={movieDetail.addFavBtnBox}>
							<Button
								variant='contained'
								onClick={movieDetailHook.onMarkAsFavorite}
							>
								Add to favorites
							</Button>
						</Box>
					</Box>
				</Box>

				<Box sx={movieDetail.wrapper}>
					<Box>
						<Typography component='p'>{movie.overview}</Typography>
					</Box>
				</Box>
			</Box>
		)
	);
};
