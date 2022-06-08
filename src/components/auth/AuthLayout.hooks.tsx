import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../api/account';
import { createSession, getRequestToken } from '../../api/auth.api';
import { User } from '../../interfaces/account.interface';
import { GlobalState } from '../../interfaces/state.interface';

export const useAuthLayout = () => {
	const dispatch = useDispatch();
	const sessionId = localStorage.getItem('session_id');
	const request_token = localStorage.getItem('request_token');
	const user: User = useSelector((state: GlobalState) => state.account.user);

	const init = (): void => {
		if (!request_token) {
			dispatch(getRequestToken());
		}
		if (request_token && !sessionId) {
			dispatch(createSession(request_token));
		}
		if (sessionId && !user) {
			dispatch(getUser(sessionId));
		}
	};

	const getUserData = () => user;

	return { init, getUserData };
};
