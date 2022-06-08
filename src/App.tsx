import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { DrawerComponent } from './components/drawer/Drawer';
import { ROUTES } from './routes/Routes';
import { IRoutes } from './interfaces/routes.interface';
import { AuthLayout } from './components/auth/AuthLayout';
import { SnackbarComponent } from './components/snackbar/Snackbar';
import { GlobalState } from './interfaces/state.interface';

function App() {
	const theme = useSelector((state: GlobalState) => state.theme.theme);
	const themePalette = createTheme({
		palette: {
			mode: theme === 'dark' ? 'dark' : 'light',
		},
	});

	return (
		<div className='App'>
			<AuthLayout>
				<ThemeProvider theme={themePalette}>
					<BrowserRouter>
						<DrawerComponent>
							<Routes>
								{ROUTES.map((route: IRoutes) => (
									<Route
										path={route.path}
										key={route.path}
										element={<route.component />}
									></Route>
								))}
							</Routes>
						</DrawerComponent>

						<SnackbarComponent />
					</BrowserRouter>
				</ThemeProvider>
			</AuthLayout>
		</div>
	);
}

export default App;
