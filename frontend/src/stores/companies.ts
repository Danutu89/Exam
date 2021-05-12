import { storex } from '$vendor/sedux';
import type { State } from '$types/companies';

export const initialState = {
	companies: {
		count: 0,
		loading: true,
		error: {
			status: 200,
			message: ''
		},
		results: []
	},
	categories: {
		loading: true,
		error: {
			status: 200,
			message: ''
		},
		results: []
	},
	category: {
		loading: false,
		error: {
			status: 200,
			message: ''
		},
		result: {}
	},
	company: {
		loading: false,
		error: {
			status: 200,
			message: ''
		},
		result: {}
	},
	update: {
		loading: false,
		error: {
			status: 200,
			message: ''
		},
		result: {}
	}
} as State;

export const companiesStore = storex(initialState);
