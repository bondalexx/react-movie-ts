import { Box, CircularProgress } from '@mui/material';

import { SpinnerStyles } from './Spinner.styles';

export const Spinner: React.FC = () => {
	const spinnerStyles = SpinnerStyles;

	return (
		<Box sx={spinnerStyles.spinnerWrapper}>
			<CircularProgress size={60} />
		</Box>
	);
};
