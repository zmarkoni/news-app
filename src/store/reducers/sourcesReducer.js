import { SET_SOURCES } from '../actions/sources';
import { SET_SOURCED_ARTICLES } from '../actions/sources';

const initialState = {
	sources: [],
	sourcedArticles: [],
	country: 'gb',
};

const sourcesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SOURCES:
			return {
				...state,
				sources: action.data,
			};
		case SET_SOURCED_ARTICLES:
			return {
				...state,
				sourcedArticles: action.data,
			};
		default:
			return state;
	}
};

export default sourcesReducer;
