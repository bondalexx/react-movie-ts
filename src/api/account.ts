import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UserFavoritesReq } from '../interfaces/account.interface';
import { ACCOUNT_ACTIONS } from '../storage/actions/account.actions';
import { API_CONFIG } from './api';

const getUser: any = createAsyncThunk(
	ACCOUNT_ACTIONS.getUser,
	async (session_id: string) => {
		const response = await axios.get(
			`${API_CONFIG.url}/account?api_key=${API_CONFIG.key}&session_id=${session_id}`
		);
		return response.data;
	}
);

const getFavoriteMovies: any = createAsyncThunk(
	ACCOUNT_ACTIONS.getFavoriteMovies,
	async ({ session_id, account_id, page }: UserFavoritesReq) => {
		const response = await axios.get(
			`${API_CONFIG.url}/account/${account_id}/favorite/movies?api_key=${API_CONFIG.key}&session_id=${session_id}&page=${page}`
		);
		return response.data;
	}
);

const getFavoriteTvSeries: any = createAsyncThunk(
	ACCOUNT_ACTIONS.getFavoriteTvSeries,
	async ({ session_id, account_id, page }: UserFavoritesReq) => {
		const response = await axios.get(
			`${API_CONFIG.url}/account/${account_id}/favorite/tv?api_key=${API_CONFIG.key}&session_id=${session_id}&page=${page}`
		);
		return response.data;
	}
);

export { getUser, getFavoriteMovies, getFavoriteTvSeries };
