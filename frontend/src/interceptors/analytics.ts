import {
	getDataFailed,
	getViewsFailed,
	gotData,
	gotViews,
	sendViewfailed,
	sentView
} from '$actions/analytics';
import { GET_DATA, GET_VIEWS, SEND_VIEW } from '$constants/analytics';
import type { AnalyzedView, Data, View } from '$types/analytics';
import type { GetViews, SendVew, GetData } from '$types/analytics/actions';
import type { Response } from '$types/response';
import { request } from '$utils/request';
import { dispatch } from '$vendor/sedux';
import type { Value } from '$vendor/sedux/types/storex';

const sendView = async ({ data, name }: SendVew): Promise<void> => {
	try {
		const res = await request.post('/api/analytics/create/', data);
		const json: Response<View> = await res.json();
		if (res.status !== 201) {
			let error = '';

			if (json.non_field_errors) {
				error = json.non_field_errors[0];
			} else if (json.details) {
				error = json.details[0];
			} else {
				const key = Object.keys(json)[0];
				error = json[key][0];
			}

			return dispatch(() => sendViewfailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => sentView(name));
	} catch (error) {
		return dispatch(() => sendViewfailed({ status: 500, message: error }, name));
	}
};

const getViews = async ({ name }: GetViews): Promise<void> => {
	try {
		const res = await request.get('/api/analytics/');
		const json: Response<Array<AnalyzedView>> = await res.json();

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

			return dispatch(() => getViewsFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotViews(json, name));
	} catch (error) {
		return dispatch(() => getViewsFailed({ status: 500, message: error }, name));
	}
};

const getData = async ({ name }: GetData): Promise<void> => {
	try {
		const res = await request.get('/api/analytics/data');
		const json: Response<Data> = await res.json();

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

			return dispatch(() => getDataFailed({ status: res.status, message: error }, name));
		}
		return dispatch(() => gotData(json, name));
	} catch (error) {
		return dispatch(() => getDataFailed({ status: 500, message: error }, name));
	}
};

export function analyticsInterceptor(action: Value): void {
	switch (action.type) {
		case SEND_VIEW:
			sendView(action);
			break;
		case GET_VIEWS:
			getViews(action);
			break;
		case GET_DATA:
			getData(action);
			break;
		default:
			break;
	}
}
