import type { Action } from '$vendor/sedux/types/action';
import type { State } from './state';

export interface Navigate extends Action {
	page: State['page']['location'];
}
