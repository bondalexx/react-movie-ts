import { createSlice } from '@reduxjs/toolkit';

import {
	getMovieById,
	getTopRatedMovies,
	getPopularMovies,
	getUpcomingMovies,
	markAsFavorite,
	getTopRatedTvSeries,
	getPopularTvSeries,
	getTvSeriesById,
	searchMovies,
	searchTvSeries,
} from '../../api/movies.api';

const initialState = {
	topRatedMovies: { movies: null, loading: true },
	topRatedTvSeries: { movies: null, loading: true },
	popularMovies: { movies: null, loading: true },
	popularTvSeries: { movies: null, loading: true },
	upcomingMovies: { movies: null, loading: true },
	movie: { movie: null, loading: true },
	tvSerie: { movie: null, loading: true },
	movieSearch: { movies: null, loading: true },
	tvSearch: { movies: null, loading: true },
	generalMovieType: null,
};

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMovieType: (state, { payload }) => {
			state.generalMovieType = payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(getTopRatedMovies.fulfilled, (state, { payload }) => {
			state.topRatedMovies.loading = false;
			state.topRatedMovies.movies = payload;
		});
		builder.addCase(getTopRatedMovies.pending, state => {
			state.topRatedMovies.loading = true;
		});
		builder.addCase(getTopRatedMovies.rejected, state => {
			state.topRatedMovies.loading = false;
		});
		builder.addCase(getTopRatedTvSeries.fulfilled, (state, { payload }) => {
			state.topRatedTvSeries.loading = false;
			state.topRatedTvSeries.movies = payload;
		});
		builder.addCase(getTopRatedTvSeries.pending, state => {
			state.topRatedTvSeries.loading = true;
		});
		builder.addCase(getTopRatedTvSeries.rejected, state => {
			state.topRatedTvSeries.loading = false;
		});

		builder.addCase(getPopularMovies.fulfilled, (state, { payload }) => {
			state.popularMovies.loading = false;
			state.popularMovies.movies = payload;
		});
		builder.addCase(getPopularMovies.pending, state => {
			state.popularMovies.loading = true;
		});
		builder.addCase(getPopularMovies.rejected, state => {
			state.popularMovies.loading = false;
		});
		builder.addCase(getPopularTvSeries.fulfilled, (state, { payload }) => {
			state.popularTvSeries.loading = false;
			state.popularTvSeries.movies = payload;
		});
		builder.addCase(getPopularTvSeries.pending, state => {
			state.popularTvSeries.loading = true;
		});
		builder.addCase(getPopularTvSeries.rejected, state => {
			state.popularTvSeries.loading = false;
		});

		builder.addCase(getUpcomingMovies.fulfilled, (state, { payload }) => {
			state.upcomingMovies.loading = false;
			state.upcomingMovies.movies = payload;
		});
		builder.addCase(getUpcomingMovies.pending, state => {
			state.upcomingMovies.loading = true;
		});
		builder.addCase(getUpcomingMovies.rejected, state => {
			state.upcomingMovies.loading = false;
		});

		builder.addCase(getMovieById.fulfilled, (state, { payload }) => {
			state.movie.loading = false;
			state.movie.movie = payload;
		});
		builder.addCase(getMovieById.pending, state => {
			state.movie.loading = true;
		});
		builder.addCase(getMovieById.rejected, state => {
			state.movie.loading = false;
		});
		builder.addCase(getTvSeriesById.fulfilled, (state, { payload }) => {
			state.tvSerie.loading = false;
			state.tvSerie.movie = payload;
		});
		builder.addCase(getTvSeriesById.pending, state => {
			state.tvSerie.loading = true;
		});
		builder.addCase(getTvSeriesById.rejected, state => {
			state.tvSerie.loading = false;
		});

		builder.addCase(markAsFavorite.fulfilled, (state, { payload }) => {});
		builder.addCase(markAsFavorite.pending, state => {});
		builder.addCase(markAsFavorite.rejected, state => {});

		builder.addCase(searchMovies.fulfilled, (state, { payload }) => {
			state.movieSearch.loading = false;
			state.movieSearch.movies = payload;
		});
		builder.addCase(searchMovies.pending, state => {
			state.movieSearch.loading = true;
		});
		builder.addCase(searchMovies.rejected, state => {
			state.movieSearch.loading = false;
		});
		builder.addCase(searchTvSeries.fulfilled, (state, { payload }) => {
			state.tvSearch.loading = false;
			state.tvSearch.movies = payload;
		});
		builder.addCase(searchTvSeries.pending, state => {
			state.tvSearch.loading = true;
		});
		builder.addCase(searchTvSeries.rejected, state => {
			state.tvSearch.loading = false;
		});
	},
});

export default moviesSlice.reducer;
export const { actions } = moviesSlice;
