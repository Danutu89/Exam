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
import type {
	GetCategories,
	GetCategoriesFailed,
	GetCategory,
	GetCategoryFailed,
	GetCompanies,
	GetCompaniesFailed,
	GetCompany,
	GetCompanyFailed,
	GetUpdateCompany,
	GetUpdateCompanyFailed,
	GotCategories,
	GotCategory,
	GotCompanies,
	GotCompany,
	GotUpdateCompany,
	UpdateCompany,
	UpdateCompanyFailed,
	UpdatedCompany
} from '$types/companies/actions';
import type { PaginatedResponse } from '$types/response';
import type { Category, Company } from '$types/companies/state';

export const getCompanies = (page: number, category: string, name: string): GetCompanies => ({
	type: GET_COMPANIES,
	name,
	category,
	page
});

export const gotCompanies = (
	{ count, results, next, prev }: PaginatedResponse<Company>,
	name: string
): GotCompanies => ({
	type: GOT_COMPANIES,
	name,
	results,
	count,
	next,
	prev
});

export const getCompaniesFailed = (
	error: { status: number; message: string },
	name: string
): GetCompaniesFailed => ({
	type: GET_COMPANIES_FAILED,
	name,
	error
});

export const getCompany = (id: string, name: string): GetCompany => ({
	type: GET_COMPANY,
	name,
	id
});

export const gotCompany = (result: Company, name: string): GotCompany => ({
	type: GOT_COMPANY,
	name,
	result
});

export const getCompanyFailed = (
	error: { status: number; message: string },
	name: string
): GetCompanyFailed => ({
	type: GET_COMPANY_FAILED,
	name,
	error
});

export const getCategories = (name: string): GetCategories => ({
	type: GET_CATEGORIES,
	name
});

export const gotCategories = (results: Array<Category>, name: string): GotCategories => ({
	type: GOT_CATEGORIES,
	name,
	results
});

export const getCategoriesFailed = (
	error: { status: number; message: string },
	name: string
): GetCategoriesFailed => ({
	type: GET_CATEGORIES_FAILED,
	name,
	error
});

export const getCategory = (id: string, name: string): GetCategory => ({
	type: GET_CATEGORY,
	id,
	name
});

export const gotCategory = (result: Category, name: string): GotCategory => ({
	type: GOT_CATEGORY,
	name,
	result
});

export const getCategoryFailed = (
	error: { status: number; message: string },
	name: string
): GetCategoryFailed => ({
	type: GET_CATEGORY_FAILED,
	name,
	error
});

export const updateCompany = (id: string, data: Company, name: string): UpdateCompany => ({
	type: UPDATE_COMPANY,
	id,
	name,
	data
});

export const updatedCompany = (result: Company, name: string): UpdatedCompany => ({
	type: UPDATED_COMPANY,
	result,
	name
});

export const updateCompanyFailed = (
	error: { status: number; message: string },
	name: string
): UpdateCompanyFailed => ({
	type: UPDATE_COMPANY_FAILED,
	name,
	error
});

export const getUpdateCompany = (name: string): GetUpdateCompany => ({
	type: GET_UPDATE_COMPANY,
	name
});

export const gotUpdateCompany = (result: Company, name: string): GotUpdateCompany => ({
	type: GOT_UPDATE_COMPANY,
	name,
	result
});

export const getUpdateCompanyFailed = (
	error: { status: number; message: string },
	name: string
): GetUpdateCompanyFailed => ({
	type: GET_UPDATE_COMPANY_FAILED,
	name,
	error
});
