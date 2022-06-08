import { Link } from 'react-router-dom';
import { ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Container, ListItemButton, ListItemText } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES } from '../../routes/Routes';
import { AppBar, Drawer, DrawerHeader, DrawerStyles } from './Drawer.styles';
import { setTheme } from '../../storage/reducers/theme.reducer';
import { API_CONFIG } from '../../api/api';
import { deleteSession } from '../../api/auth.api';
import { User } from '../../interfaces/account.interface';
import { GlobalState } from '../../interfaces/state.interface';

export const DrawerComponent = ({ children }: { children: ReactElement }) => {
	const drawerStyles = DrawerStyles;
	const [open, setOpen] = useState(false);
	const drawerRoutes = ROUTES.filter(r => r.inDrawer);
	const theme = useSelector((state: GlobalState) => state.theme.theme);
	const user: User = useSelector((state: GlobalState) => state.account.user);
	const sessionId = localStorage.getItem('session_id');
	const dispatch = useDispatch();

	const handleModeChange = (): void => {
		dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
	};

	const handleDrawerOpen = (): void => {
		setOpen(true);
	};

	const handleDrawerClose = (): void => {
		setOpen(false);
	};

	const onLogOut = (): void => {
		dispatch(deleteSession(sessionId));
	};

	return (
		user && (
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position='fixed' open={open}>
					<Toolbar>
						<Box sx={drawerStyles.menu}>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								onClick={handleDrawerOpen}
								edge='start'
								sx={{
									marginRight: 5,
									...(open && { display: 'none' }),
								}}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' noWrap component='div'>
								<img
									style={drawerStyles.logo}
									alt='logo'
									src={require('../../assets/images/imdb.png')}
									width={80}
								/>
							</Typography>
						</Box>
						<Box sx={drawerStyles.theme}>
							<IconButton
								sx={{ ml: 1 }}
								onClick={handleModeChange}
								color='inherit'
							>
								{theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer variant='permanent' open={open}>
					<DrawerHeader sx={drawerStyles.user}>
						<Box sx={drawerStyles.userWrapper}>
							<img
								style={drawerStyles.avatar}
								alt='user-avatar'
								src={API_CONFIG.imageBaseUrl + user.avatar.tmdb.avatar_path}
							/>
							<Typography sx={drawerStyles.userName} component='p'>
								{user.name}
							</Typography>
						</Box>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						{drawerRoutes.map(value => (
							<ListItemButton
								component={Link}
								to={value.path}
								key={value.sidebarName}
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{value.icon}
								</ListItemIcon>
								<ListItemText
									primary={value.sidebarName}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						))}
						<Divider />
						<ListItemButton
							onClick={onLogOut}
							component={Link}
							to='/'
							key='Log out'
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
								color: 'red',
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
									color: 'red',
								}}
							>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary='Log out' sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</List>
				</Drawer>
				<Container sx={drawerStyles.container} maxWidth={false}>
					<DrawerHeader />

					{children}
				</Container>
			</Box>
		)
	);
};
