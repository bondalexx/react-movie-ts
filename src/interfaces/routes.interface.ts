import { FC, ReactElement } from 'react';

export interface IRoutes {
	path: string;
	sidebarName?: string;
	component: FC<{}>;
	icon?: ReactElement;
	inDrawer: boolean;
}
