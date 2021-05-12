import type { Action } from '$vendor/sedux/types/action';
import type { AnalyzedView, Data, View } from './state';

export interface SendVew extends Action {
	data: View;
}

export interface SentView extends Action {
	name: string;
}

export interface SendViewFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface GetViews extends Action {
	name: string;
}

export interface GotViews extends Action {
	results: Array<AnalyzedView>;
}

export interface GetViewsFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}

export interface GetData extends Action {
	name: string;
}

export interface GotData extends Action {
	result: Data;
}

export interface GetDataFailed extends Action {
	error: {
		status: number;
		message: string;
	};
}
