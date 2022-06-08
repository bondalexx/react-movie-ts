import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isVisible: false,
	text: null,
	type: null,
};

export const snackBarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		showSnackBar: (state, { payload }) => {
			state.isVisible = true;
			state.text = payload.text;
			state.type = payload.type;
		},
		hideSnackBar: state => {
			state.isVisible = false;
		},
	},
});

export default snackBarSlice.reducer;
export const { actions } = snackBarSlice;
