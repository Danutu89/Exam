import type { State } from '$types/analytics';
import { storex } from '$vendor/sedux';

export const initialState = {
	view: {
		loading: false,
		error: {
			status: 200,
			message: ''
		}
	},
	views: {
		loading: true,
		error: {
			status: 200,
			message: ''
		},
		results: []
	},
	data: {
		views: {
			new: 0,
			total: 0,
			unique: 0
		},
		loading: true,
		error: {
			status: 200,
			message: ''
		}
	}
} as State;

export const analyticsStore = storex(initialState);
