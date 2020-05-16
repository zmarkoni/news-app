import { FETCH_TOP_HEADLINES } from '../actions/topHeadlines';

const initialState = {
	topHeadlines: null,
};

const topHeadlines = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TOP_HEADLINES:
			return {
				...state,
				topHeadlines: action.topHeadlines,
			};
		default:
			return state;
	}
};

export default topHeadlines;
