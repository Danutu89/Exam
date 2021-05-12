export interface Presentation {
	id: string;
	name: string;
	image: string;
	description: string;
	inverse: boolean;
}

export interface Image {
	id: string;
	name: string;
	image: string;
}

export interface Category {
	id: string;
	name: string;
	image: string;
	description: string;
}

export interface Company {
	name: string;
	id: string;
	logo: string;
	description: string;
	presentations: Array<Presentation>;
	images: Array<Images>;
	slug: string;
	categories: Array<Category>;
	link: string;
}

export interface State {
	companies: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
		count: number;
		results: Array<Company>;
		next: string;
		prev: string;
	};
	categories: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
		results: Array<Category>;
	};
	category: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
		result: Category;
	};
	company: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
		result: Company;
	};
	update: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
		result: Company;
	};
}
