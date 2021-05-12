import {
	GET_CATEGORIES,
	GET_CATEGORIES_FAILED,
	GET_CATEGORY,
	GET_CATEGORY_FAILED,
	GET_COMPANIES,
	GET_COMPANIES_FAILED,
	GET_COMPANY,
	GET_COMPANY_FAILED,
	GET_UPDATE_COMPANY,
	GET_UPDATE_COMPANY_FAILED,
	GOT_CATEGORIES,
	GOT_CATEGORY,
	GOT_COMPANIES,
	GOT_COMPANY,
	GOT_UPDATE_COMPANY,
	UPDATED_COMPANY,
	UPDATE_COMPANY,
	UPDATE_COMPANY_FAILED
} from '$constants/companies';
import type { State } from '$types/companies';
import type { Action } from '$vendor/sedux/types/action';

export const companiesReducer = (action: Action, state: State): State => {
	switch (action.type) {
		case GET_COMPANIES:
			state.companies.loading = true;
			state.companies.count = 0;
			state.companies.error = { status: 200, message: '' };
			state.companies.results = [];
			break;
		case GOT_COMPANIES:
			state.companies.loading = false;
			state.companies.results = action.results;
			state.companies.count = action.count;
			state.companies.next = action.next;
			state.companies.prev = action.prev;
			break;
		case GET_COMPANIES_FAILED:
			state.companies.loading = false;
			state.companies.error = action.error;
			break;
		case GET_COMPANY:
			state.company.loading = true;
			state.company.error = { status: 200, message: '' };
			state.company.result = {};
			break;
		case GOT_COMPANY:
			state.company.loading = false;
			state.company.result = action.result;
			break;
		case GET_COMPANY_FAILED:
			state.company.loading = false;
			state.company.error = action.error;
			break;
		case GET_CATEGORIES:
			state.categories.loading = true;
			state.categories.error = { status: 200, message: '' };
			state.categories.results = [];
			break;
		case GOT_CATEGORIES:
			state.categories.loading = false;
			state.categories.results = action.results;
			break;
		case GET_CATEGORIES_FAILED:
			state.categories.loading = false;
			state.categories.error = action.error;
			break;
		case GET_CATEGORY:
			state.category.loading = true;
			state.category.error = { status: 200, message: '' };
			state.category.result = {};
			break;
		case GOT_CATEGORY:
			state.category.loading = false;
			state.category.result = action.result;
			break;
		case GET_CATEGORY_FAILED:
			state.category.loading = false;
			state.category.error = action.error;
			break;
		case UPDATE_COMPANY:
			state.update.loading = true;
			state.update.error = { status: 200, message: '' };
			state.update.result = {};
			break;
		case UPDATED_COMPANY:
			state.update.loading = false;
			state.update.result = action.result;
			break;
		case UPDATE_COMPANY_FAILED:
			state.update.loading = false;
			state.update.error = action.error;
			break;
		case GET_UPDATE_COMPANY:
			state.update.loading = true;
			state.update.error = { status: 200, message: '' };
			state.update.result = {};
			break;
		case GOT_UPDATE_COMPANY:
			state.update.loading = false;
			state.update.result = action.result;
			break;
		case GET_UPDATE_COMPANY_FAILED:
			state.update.loading = false;
			state.update.error = action.error;
			break;
		default:
			break;
	}

	return state;
};
