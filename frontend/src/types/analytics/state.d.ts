export interface View {
	session: string;
	route: string;
}

export interface AnalyzedView {
	day: string;
	count: number;
}

export interface Data {
	new: number;
	total: number;
	unique: number;
}

export interface State {
	view: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
	};
	views: {
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
		results: Array<AnalyzedView>;
	};
	data: {
		views: Data;
		loading: boolean;
		error: {
			status: number;
			message: string;
		};
	};
}
