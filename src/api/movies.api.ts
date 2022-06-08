import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { MOVIE_ACTIONS } from '../storage/actions/movies.action';
import { API_CONFIG } from './api';
import { actions as snackBarActions } from '../storage/reducers/snackbar.reducer';
import { ERROR_SNACKBAR } from '../constants/error';
import { getFavoriteMovies, getFavoriteTvSeries } from './account';
import { UserFavoritesReq } from '../interfaces/account.interface';
import { MovieSearchReq } from '../interfaces/movie.interface';

const getTopRatedMovies: any = createAsyncThunk(
	MOVIE_ACTIONS.getTopRatedMovies,
	async (page: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/movie/top_rated?api_key=${API_CONFIG.key}&page=${page}`
		);
		return response.data;
	}
);

const getTopRatedTvSeries: any = createAsyncThunk(
	MOVIE_ACTIONS.getTopRatedTvSeries,
	async (page: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/tv/top_rated?api_key=${API_CONFIG.key}&page=${page}`
		);
		return response.data;
	}
);

const getPopularMovies: any = createAsyncThunk(
	MOVIE_ACTIONS.getPopularMovies,
	async (page: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/movie/popular?api_key=${API_CONFIG.key}&page=${page}`
		);
		return response.data;
	}
);

const getPopularTvSeries: any = createAsyncThunk(
	MOVIE_ACTIONS.getPopularTvSeries,
	async (page: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/tv/popular?api_key=${API_CONFIG.key}&page=${page}`
		);
		return response.data;
	}
);

const getUpcomingMovies: any = createAsyncThunk(
	MOVIE_ACTIONS.getUpcomingMovies,
	async (page: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/movie/upcoming?api_key=${API_CONFIG.key}&page=${page}`
		);
		return response.data;
	}
);

const getMovieById: any = createAsyncThunk(
	MOVIE_ACTIONS.getMovieById,
	async (movieId: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/movie/${movieId}?api_key=${API_CONFIG.key}`
		);
		return response.data;
	}
);

const getTvSeriesById: any = createAsyncThunk(
	MOVIE_ACTIONS.getTvSeriesById,
	async (movieId: number) => {
		const response = await axios.get(
			`${API_CONFIG.url}/tv/${movieId}?api_key=${API_CONFIG.key}`
		);
		return response.data;
	}
);

const markAsFavorite: any = createAsyncThunk(
	MOVIE_ACTIONS.markAsFavorite,
	async (
		{
			session_id,
			account_id,
			media_type,
			media_id,
			favorite,
		}: UserFavoritesReq,
		ThunkAPI
	) => {
		try {
			const response = await axios.post(
				`${API_CONFIG.url}/account/${account_id}/favorite?api_key=${API_CONFIG.key}&session_id=${session_id}`,
				{ media_type, media_id, favorite }
			);

			if (media_type === 'movie') {
				ThunkAPI.dispatch(
					getFavoriteMovies({ session_id, account_id, page: 1 })
				);
			} else {
				ThunkAPI.dispatch(
					getFavoriteTvSeries({ session_id, account_id, page: 1 })
				);
			}

			ThunkAPI.dispatch(
				snackBarActions.showSnackBar({
					text: favorite
						? 'Movie was added to favorites'
						: 'Movie was removed from favorites',
					type: 'success',
				})
			);

			return response.data;
		} catch (error) {
			ThunkAPI.dispatch(snackBarActions.showSnackBar(ERROR_SNACKBAR));
		}
	}
);

const searchMovies: any = createAsyncThunk(
	MOVIE_ACTIONS.searchMovies,
	async ({ query, page }: MovieSearchReq) => {
		const response = await axios.get(
			`${API_CONFIG.url}/search/movie/?api_key=${API_CONFIG.key}&query=${query}&page=${page}`
		);
		return response.data;
	}
);

const searchTvSeries: any = createAsyncThunk(
	MOVIE_ACTIONS.searchTvSeries,
	async ({ query, page }: MovieSearchReq) => {
		const response = await axios.get(
			`${API_CONFIG.url}/search/tv/?api_key=${API_CONFIG.key}&query=${query}&page=${page}`
		);
		return response.data;
	}
);

export {
	getTopRatedMovies,
	getTopRatedTvSeries,
	getPopularMovies,
	getPopularTvSeries,
	getUpcomingMovies,
	getMovieById,
	getTvSeriesById,
	searchMovies,
	searchTvSeries,
	markAsFavorite,
};
