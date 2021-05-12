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
import type { State } from '$types/analytics';
import type { Action } from '$vendor/sedux/types/action';

export const analyticsReducer = (action: Action, state: State): State => {
	switch (action.type) {
		case SEND_VIEW:
			state.view.loading = true;
			state.view.error = { status: 200, message: '' };
			break;
		case SENT_VIEW:
			state.view.loading = false;
			break;
		case SEND_VIEW_FAILED:
			state.view.loading = false;
			state.view.error = action.error;
			break;
		case GET_VIEWS:
			state.views.loading = true;
			state.views.error = { status: 200, message: '' };
			state.views.results = [];
			break;
		case GOT_VIEWS:
			state.views.loading = false;
			state.views.results = action.results;
			break;
		case GET_VIEWS_FAILED:
			state.views.loading = false;
			state.views.error = action.error;
			break;
		case GET_DATA:
			state.data.loading = true;
			state.data.error = { status: 200, message: '' };
			state.data.views = {};
			break;
		case GOT_DATA:
			state.data.loading = false;
			state.data.views = action.result;
			break;
		case GET_DATA_FAILED:
			state.data.loading = false;
			state.data.error = action.error;
			break;
		default:
			break;
	}

	return state;
};
