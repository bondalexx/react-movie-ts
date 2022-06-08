import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AUTH_ACTIONS } from '../storage/actions/auth.actions';
import { API_CONFIG } from './api';

const getRequestToken: any = createAsyncThunk(
	AUTH_ACTIONS.getRequestToken,
	async () => {
		const response = await axios.get(
			`${API_CONFIG.url}/authentication/token/new?api_key=${API_CONFIG.key}&redirect_to=http://localhost:3000`
		);
		return response.data.request_token;
	}
);

const createSession: any = createAsyncThunk(
	AUTH_ACTIONS.createSession,
	async (request_token: string) => {
		const response = await axios.post(
			`${API_CONFIG.url}/authentication/session/new?api_key=${API_CONFIG.key}`,
			{ request_token }
		);
		return response.data.session_id;
	}
);

const deleteSession: any = createAsyncThunk(
	AUTH_ACTIONS.deleteSession,
	async (session_id: string) => {
		const response = await axios.delete(
			`${API_CONFIG.url}/authentication/session?api_key=${API_CONFIG.key}&session_id=${session_id}`
		);
		return response.data;
	}
);

export { getRequestToken, createSession, deleteSession };
