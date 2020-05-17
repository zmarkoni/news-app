import { SET_ARTICLES } from '../actions/articles';

const initialState = {
	articles: [],
};

const articles = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARTICLES:
			return {
				...state,
				articles: action.data,
			};
		default:
			return state;
	}
};

export default articles;
