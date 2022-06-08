import { createSlice } from '@reduxjs/toolkit';

import {
	createSession,
	deleteSession,
	getRequestToken,
} from '../../api/auth.api';

const initialState = {};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getRequestToken.fulfilled, (state, { payload }) => {
			localStorage.setItem('request_token', payload);
			window.location.href = `https://www.themoviedb.org/authenticate/${payload}?redirect_to=http://localhost:3000`;
		});
		builder.addCase(getRequestToken.pending, state => {});
		builder.addCase(getRequestToken.rejected, state => {});

		builder.addCase(createSession.fulfilled, (state, { payload }) => {
			localStorage.setItem('session_id', payload);
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		});
		builder.addCase(createSession.pending, state => {});
		builder.addCase(createSession.rejected, state => {});

		builder.addCase(deleteSession.fulfilled, (state, { payload }) => {
			localStorage.removeItem('request_token');
			localStorage.removeItem('session_id');
			window.location.reload();
		});
		builder.addCase(deleteSession.pending, state => {});
		builder.addCase(deleteSession.rejected, state => {});
	},
});

export default authSlice.reducer;
