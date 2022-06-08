import { createSlice } from '@reduxjs/toolkit';

import {
	getFavoriteMovies,
	getFavoriteTvSeries,
	getUser,
} from '../../api/account';

const initialState = {
	user: null,
	favoriteMovies: { movies: null, loading: false },
	favoriteTvSeries: { movies: null, loading: false },
};

export const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getUser.fulfilled, (state, { payload }) => {
			state.user = payload;
		});
		builder.addCase(getUser.pending, state => {});
		builder.addCase(getUser.rejected, state => {});

		builder.addCase(getFavoriteMovies.fulfilled, (state, { payload }) => {
			state.favoriteMovies.loading = false;
			state.favoriteMovies.movies = payload;
		});
		builder.addCase(getFavoriteMovies.pending, state => {
			state.favoriteMovies.loading = true;
		});
		builder.addCase(getFavoriteMovies.rejected, state => {
			state.favoriteMovies.loading = false;
		});

		builder.addCase(getFavoriteTvSeries.fulfilled, (state, { payload }) => {
			state.favoriteTvSeries.loading = false;
			state.favoriteTvSeries.movies = payload;
		});
		builder.addCase(getFavoriteTvSeries.pending, state => {
			state.favoriteTvSeries.loading = true;
		});
		builder.addCase(getFavoriteTvSeries.rejected, state => {
			state.favoriteTvSeries.loading = false;
		});
	},
});

export default accountSlice.reducer;
