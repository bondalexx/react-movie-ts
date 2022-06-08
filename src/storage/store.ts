import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './reducers/account.reducer';
import authReducer from './reducers/auth.reducer';
import moviesReducer from './reducers/movies.reducer';
import themeReducer from './reducers/theme.reducer';
import snackBarReducer from './reducers/snackbar.reducer';

const store = configureStore({
	reducer: {
		movies: moviesReducer,
		theme: themeReducer,
		auth: authReducer,
		account: accountReducer,
		snackbar: snackBarReducer,
	},
});

export default store;
