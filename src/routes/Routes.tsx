import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Home } from '../pages/home/Home';
import { MovieDetail } from '../pages/movie/movie-detail/MovieDetail';
import { MovieTypeComponent } from '../pages/movie/movie-type/MovieType';
import { IRoutes } from '../interfaces/routes.interface';
import { Movies } from '../pages/movie/movies/Movies';
import { Favorites } from '../pages/favorites/Favorites';

export const ROUTES: IRoutes[] = [
	{
		path: '/',
		sidebarName: 'Home',
		component: Home,
		icon: <HomeIcon />,
		inDrawer: true,
	},
	{
		path: '/movies',
		sidebarName: 'Movies',
		component: Movies,
		icon: <MovieIcon />,
		inDrawer: true,
	},
	{
		path: '/tv',
		sidebarName: 'TV Series',
		component: Movies,
		icon: <LiveTvIcon />,
		inDrawer: true,
	},
	{
		path: '/favorite_movies',
		sidebarName: 'Favorite Movies',
		component: Favorites,
		icon: <StarIcon />,
		inDrawer: true,
	},
	{
		path: '/favorite_tv',
		sidebarName: 'Favorite TV Series',
		component: Favorites,
		icon: <StarBorderIcon />,
		inDrawer: true,
	},
	{
		path: '/top_rated',
		component: MovieTypeComponent,
		inDrawer: false,
	},
	{
		path: '/tv_top_rated',
		component: MovieTypeComponent,
		inDrawer: false,
	},
	{
		path: '/popular',
		component: MovieTypeComponent,
		inDrawer: false,
	},
	{
		path: '/tv_popular',
		component: MovieTypeComponent,
		inDrawer: false,
	},
	{
		path: '/upcoming',
		component: MovieTypeComponent,
		inDrawer: false,
	},
	{
		path: '/movie/:id',
		component: MovieDetail,
		inDrawer: false,
	},
	{
		path: '/tv/:id',
		component: MovieDetail,
		inDrawer: false,
	},
];
