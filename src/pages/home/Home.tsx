import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { useEffect } from 'react';

import { HomeStyles } from './Home.styles';
import { SearchComponent } from '../../components/search/Search';
import { MoviesOverview } from '../../components/movies-overview/MoviesOverview';
import { MovieList } from '../../components/movie-list/MovieList';
import { useHome } from './Home.hooks';

export const Home: React.FC = () => {
	const homeStyles = HomeStyles;
	const homeHook = useHome();
	const searchAction = homeHook.getSearchAction();
	const movieType = homeHook.getMovieType();
	const currentMovie = homeHook.getCurrentMovie();

	useEffect(() => {
		homeHook.init();
	}, [homeHook]);

	const onSelectMovieType = (event: SelectChangeEvent): void => {
		homeHook.selectMovieType(event);
	};

	const handleQueryChange = (q: string): void => {
		homeHook.handleQueryChangeHook(q);
	};

	const onSearch = (): void => {
		homeHook.search();
	};

	const onClear = (): void => {
		homeHook.clear();
	};

	const pageClickHandler = (pageClicked: number): void => {
		homeHook.movieTypeAction(pageClicked);
	};

	return (
		<Grid container spacing={2} sx={[homeStyles.grid, homeStyles.centerGrid]}>
			<Box sx={homeStyles.searchBox}>
				<FormControl sx={homeStyles.movieTypeSelect}>
					<InputLabel id='demo-simple-select-label'>Movie Type</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={movieType}
						label='Movie Type'
						onChange={onSelectMovieType}
					>
						<MenuItem value='movie'>Movie</MenuItem>
						<MenuItem value='tv'>TV</MenuItem>
					</Select>
				</FormControl>

				<SearchComponent
					onChangeQuery={handleQueryChange}
					action={searchAction}
				/>

				<Button
					variant='contained'
					sx={homeStyles.searchBtns}
					onClick={onSearch}
				>
					Search
				</Button>
				<Button
					variant='contained'
					color='error'
					sx={homeStyles.searchBtns}
					onClick={onClear}
				>
					Clear
				</Button>
			</Box>

			{searchAction === 'clear' ? (
				<Grid container>
					<Grid item xs={12} sx={homeStyles.gridItem}>
						<MoviesOverview
							movieType={{ type: 'top_rated', name: 'Top Rated' }}
						/>
					</Grid>

					<Grid item xs={12} sx={homeStyles.gridItem}>
						<MoviesOverview
							movieType={{ type: 'tv_top_rated', name: 'Top Rated TV Series' }}
						/>
					</Grid>
				</Grid>
			) : null}
			{searchAction === 'search' && currentMovie?.movies ? (
				<MovieList
					movies={currentMovie.movies}
					loading={currentMovie.loading}
					movieType={{ type: 'search', name: 'Search Results' }}
					pageClickHandler={pageClickHandler}
				/>
			) : null}
		</Grid>
	);
};
