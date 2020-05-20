import { updateObject } from '../../shared/utility';
import {
	SET_TOP_HEADLINES,
	SET_TOP_HEADLINES_COUNTRY,
} from '../actions/topHeadlines';

const initialState = {
	topHeadlines: {
		articles: [],
		country: 'gb',
	},
};

const setTopHeadlines = (state, action) => {
	const update = {
		articles: action.payload.topHeadlines,
		country: action.payload.country,
	};
	return updateObject(state, { topHeadlines: update });
};

const setCountry = (state, action) => {
	return updateObject(state, { topHeadlines: { country: action.payload } });
};

const topHeadlinesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOP_HEADLINES:
			return setTopHeadlines(state, action);
		case SET_TOP_HEADLINES_COUNTRY:
			return setCountry(state, action);
	}
	return state;
};

export default topHeadlinesReducer;
