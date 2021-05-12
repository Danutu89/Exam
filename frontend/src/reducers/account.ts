import { NAVIGATE } from '$constants/account';
import type { State } from '$types/account';
import type { Action } from '$vendor/sedux/types/action';

export const accountReducer = (action: Action, state: State): State => {
	switch (action.type) {
		case NAVIGATE:
			state.page.location = action.page;
			break;
		default:
			break;
	}

	return state;
};
