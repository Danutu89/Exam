import {
	getCategoriesFailed,
	getCategoryFailed,
	getCompaniesFailed,
	getCompanyFailed,
	getUpdateCompanyFailed,
	gotCategories,
	gotCategory,
	gotCompanies,
	gotCompany,
	gotUpdateCompany,
	updateCompanyFailed,
	updatedCompany
} from '$actions/companies';
import {
	GET_CATEGORIES,
	GET_CATEGORY,
	GET_COMPANIES,
	GET_COMPANY,
	GET_UPDATE_COMPANY,
	UPDATE_COMPANY
} from '$constants/companies';
import type { Category, Company } from '$types/companies';
import type {
	GetCategories,
	GetCategory,
	GetCompanies,
	GetCompany,
	GetUpdateCompany,
	UpdateCompany
} from '$types/companies/actions';
import type { PaginatedResponse, Response } from '$types/response';
import { request } from '$utils/request';
import { dispatch } from '$vendor/sedux';
import type { Value } from '$vendor/sedux/types/storex';

export const getCompanies = async ({ page, category, name }: GetCompanies): Promise<void> => {
	try {
		const res = await request.get('/api/companies/', { having_category: category, page });
		const json: PaginatedResponse<Company> = await res.json();
		if (res.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => getCompaniesFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotCompanies(json, name));
	} catch (e) {
		return dispatch(() => getCompaniesFailed({ status: 500, message: e }, name));
	}
};

export const getCompany = async ({ name, id }: GetCompany): Promise<void> => {
	try {
		const res = await request.get(`/api/companies/${id}`);
		const json: Response<Company> = await res.json();
		if (res.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => getCompanyFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotCompany(json, name));
	} catch (e) {
		return dispatch(() => getCompanyFailed({ status: 500, message: e }, name));
	}
};

export const getCategories = async ({ name }: GetCategories): Promise<void> => {
	try {
		const res = await request.get('/api/companies/categories/');
		const json: Response<Array<Category>> = await res.json();
		if (res.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => getCategoriesFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotCategories(json, name));
	} catch (e) {
		return dispatch(() => getCategoriesFailed({ status: 500, message: e }, name));
	}
};

export const getCategory = async ({ name, id }: GetCategory): Promise<void> => {
	try {
		const res = await request.get(`/api/companies/categories/${id}`);
		const json: Response<Category> = await res.json();
		if (res.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => getCategoryFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotCategory(json, name));
	} catch (e) {
		return dispatch(() => getCategoryFailed({ status: 500, message: e }, name));
	}
};

export const getUpdateCompany = async ({ name }: GetUpdateCompany): Promise<void> => {
	try {
		const res = await request.get(`/api/companies/update/`);
		const json: Response<Company> = await res.json();
		if (res.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => getUpdateCompanyFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotUpdateCompany(json, name));
	} catch (e) {
		return dispatch(() => getUpdateCompanyFailed({ status: 500, message: e }, name));
	}
};

export const updateCompany = async ({ name, data }: UpdateCompany): Promise<void> => {
	try {
		const res = await request.post(`/api/companies/update/`, data);
		const json: Response<Company> = await res.json();
		if (res.status !== 200) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => updateCompanyFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => updatedCompany(json, name));
	} catch (e) {
		return dispatch(() => updateCompanyFailed({ status: 500, message: e }, name));
	}
};

export function companiesInterceptor(action: Value): void {
	switch (action.type) {
		case GET_COMPANIES:
			getCompanies(action);
			break;
		case GET_CATEGORIES:
			getCategories(action);
			break;
		case GET_CATEGORY:
			getCategory(action);
			break;
		case GET_COMPANY:
			getCompany(action);
			break;
		case UPDATE_COMPANY:
			updateCompany(action);
			break;
		case GET_UPDATE_COMPANY:
			getUpdateCompany(action);
			break;
		default:
			break;
	}
}
