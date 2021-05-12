import { storex } from '$vendor/sedux';
import type { State } from '$types/account';

export const initialState = {
	page: {
		location: 'analytics'
	}
} as State;

export const accountStore = storex(initialState);
