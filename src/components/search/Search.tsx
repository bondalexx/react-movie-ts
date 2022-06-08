import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

import { Search, SearchIconWrapper, StyledInputBase } from './Search.styles';

export const SearchComponent = ({ onChangeQuery, action }: any) => {
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (action === 'clear') {
			setQuery('');
		}
	}, [action]);

	const onQueryChange = (event: any): void => {
		setQuery(event.target.value);
		onChangeQuery(event.target.value);
	};

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
				value={query}
				onChange={e => onQueryChange(e)}
			/>
		</Search>
	);
};
