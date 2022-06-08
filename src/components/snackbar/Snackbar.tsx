import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as snackBarActions } from '../../storage/reducers/snackbar.reducer';
import { GlobalState } from '../../interfaces/state.interface';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const SnackbarComponent = () => {
	const dispatch = useDispatch();
	const snackBar = useSelector((state: GlobalState) => state.snackbar);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	): void => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(snackBarActions.hideSnackBar());
	};

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={snackBar.isVisible}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity={snackBar.type}
					sx={{ width: '100%' }}
				>
					{snackBar.text}
				</Alert>
			</Snackbar>
		</Stack>
	);
};
