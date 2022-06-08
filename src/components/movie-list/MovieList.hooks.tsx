import { useLocation } from 'react-router-dom';

import {
	MOVIES_TYPES_AVAILABLE,
	TV_SERIES_TYPES_AVAILABLE,
} from '../../constants/movie-type.constant';
import { MovieType } from '../../interfaces/movie.interface';

export const useMovieList = (movieType: any) => {
	const location = useLocation();
	const type = location.pathname.includes('tv') ? 'tv' : 'movie';

	const pageClick = (
		event: any,
		currentPage: number,
		pageClickHandler: any
	): void => {
		let pageClicked = 1;

		if (event.target.dataset.testid) {
			if (event.target.dataset.testid === 'NavigateNextIcon') {
				pageClicked = currentPage + 1;
			}
			if (event.target.dataset.testid === 'NavigateBeforeIcon') {
				pageClicked = currentPage - 1;
			}
		} else {
			pageClicked = parseInt(event.target.textContent);
		}

		pageClickHandler(pageClicked);
	};

	const getPageTitle = (): string => {
		if (movieType.type !== 'search') {
			return type === 'tv'
				? TV_SERIES_TYPES_AVAILABLE.filter(
						(m: MovieType) => m.type === movieType
				  )[0].name
				: MOVIES_TYPES_AVAILABLE.filter(
						(m: MovieType) => m.type === movieType
				  )[0].name;
		} else {
			return movieType.name;
		}
	};

	return { pageClick, getPageTitle };
};
