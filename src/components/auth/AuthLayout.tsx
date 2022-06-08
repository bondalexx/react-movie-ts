import { ReactElement, useEffect } from 'react';

import { useAuthLayout } from './AuthLayout.hooks';

export const AuthLayout = ({ children }: { children: ReactElement }) => {
	const authLayoutHook = useAuthLayout();
	const user = authLayoutHook.getUserData();

	useEffect(() => {
		authLayoutHook.init();
	}, [authLayoutHook]);

	return user && children;
};
