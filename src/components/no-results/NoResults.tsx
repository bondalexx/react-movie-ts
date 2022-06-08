import { Box, Typography } from '@mui/material';

import { SpinnerStyles } from '../spinner/Spinner.styles';

export const NoResults = () => {
	const spinnerStyles = SpinnerStyles;

	return (
		<Box sx={spinnerStyles.spinnerWrapper}>
			<Typography variant='h4'>No results was found</Typography>
		</Box>
	);
};
