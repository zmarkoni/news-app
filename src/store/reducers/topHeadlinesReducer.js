import { updateObject } from '../../shared/utility';
import {
	SET_TOP_HEADLINES,
	SET_TOP_HEADLINES_COUNTRY,
} from '../actions/topHeadlines';

const initialState = {
	articles: [],
	country: 'gb',
};

const setTopHeadlines = (state, action) => {
	const update = {
		articles: action.payload.articles,
		country: action.payload.country,
	};
	return updateObject(state, update);
};

const setTopHeadlinesCountry = (state, action) => {
	const update = {
		country: action.payload.country,
	};
	return updateObject(state, update);
};

const topHeadlinesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOP_HEADLINES:
			return setTopHeadlines(state, action);
		case SET_TOP_HEADLINES_COUNTRY:
			return setTopHeadlinesCountry(state, action);
	}
	return state;
};

export default topHeadlinesReducer;
