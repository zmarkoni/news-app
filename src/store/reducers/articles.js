import { SET_ARTICLES } from '../actions/articles';
import { SET_COUNTRY } from '../actions/articles';

const initialState = {
	articles: [],
	country: '',
};

const articles = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARTICLES:
			return {
				...state,
				articles: action.data,
			};
		case SET_COUNTRY:
			return {
				...state,
				country: action.data,
			};
		default:
			return state;
	}
};

export default articles;
