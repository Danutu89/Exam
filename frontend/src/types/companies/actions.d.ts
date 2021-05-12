import type { Action } from '$vendor/sedux/types/action';
import type { Category, Company } from './state';

export interface GetCompanies extends Action {
	page: number;
	category: string;
}

export interface GotCompanies extends Action {
	count: number;
	results: Array<Company>;
	next: string;
	prev: string;
}

export interface GetCompaniesFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface GetCompany extends Action {
	id: string;
}

export interface GotCompany extends Action {
	result: Company;
}

export interface GetCompanyFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface GetCategories extends Action {
	name: string;
}

export interface GotCategories extends Action {
	results: Array<Category>;
}

export interface GetCategoriesFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface GetCategory extends Action {
	id: string;
}

export interface GotCategory extends Action {
	result: Category;
}

export interface GetCategoryFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface UpdateCompany extends Action {
	id: string;
	data: Company;
}

export interface UpdatedCompany extends Action {
	result: Company;
}

export interface UpdateCompanyFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface GetUpdateCompany extends Action {
	name: string;
}

export interface GotUpdateCompany extends Action {
	result: Company;
}

export interface GetUpdateCompanyFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}
