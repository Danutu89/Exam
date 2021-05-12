import {
	GET_DATA,
	GET_DATA_FAILED,
	GET_VIEWS,
	GET_VIEWS_FAILED,
	GOT_DATA,
	GOT_VIEWS,
	SEND_VIEW,
	SEND_VIEW_FAILED,
	SENT_VIEW
} from '$constants/analytics';
import type { AnalyzedView, Data, View } from '$types/analytics';
import type {
	GetData,
	GetDataFailed,
	GetViews,
	GetViewsFailed,
	GotData,
	GotViews,
	SendVew,
	SendViewFailed,
	SentView
} from '$types/analytics/actions';

export const sendView = (data: View, name: string): SendVew => ({
	type: SEND_VIEW,
	data,
	name
});

export const sentView = (name: string): SentView => ({
	type: SENT_VIEW,
	name
});

export const sendViewfailed = (
	error: { status: number; message: string },
	name: string
): SendViewFailed => ({
	type: SEND_VIEW_FAILED,
	error,
	name
});

export const getViews = (name: string): GetViews => ({
	type: GET_VIEWS,
	name
});

export const gotViews = (results: Array<AnalyzedView>, name: string): GotViews => ({
	type: GOT_VIEWS,
	name,
	results
});

export const getViewsFailed = (
	error: { status: number; message: string },
	name: string
): GetViewsFailed => ({
	type: GET_VIEWS_FAILED,
	name,
	error
});

export const getData = (name: string): GetData => ({
	type: GET_DATA,
	name
});

export const gotData = (result: Data, name: string): GotData => ({
	type: GOT_DATA,
	name,
	result
});

export const getDataFailed = (
	error: { status: number; message: string },
	name: string
): GetDataFailed => ({
	type: GET_DATA_FAILED,
	error,
	name
});
