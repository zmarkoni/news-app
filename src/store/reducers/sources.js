import { SET_SOURCES } from '../actions/sources';
import { SET_SOURCED_ARTICLES } from '../actions/sources';

const initialState = {
	sources: [],
	sourcedArticles: [],
};

const sources = (state = initialState, action) => {
	switch (action.type) {
		case SET_SOURCES:
			return {
				...state,
				articles: action.data,
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

export default sources;
