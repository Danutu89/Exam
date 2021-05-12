import { NAVIGATE } from '$constants/account';
import type { State } from '$types/account';
import type { Navigate } from '$types/account/actions';

export const navigate = (page: State['page']['location'], name: string): Navigate => ({
	type: NAVIGATE,
	name,
	page
});
