import { updateObject } from '../../shared/utility';
import { SET_SEARCH, SET_SEARCH_COUNTRY } from '../actions/search';

const initialState = {
	articles: [],
	country: 'gb',
};

const setSearch = (state, action) => {
	const update = {
		articles: action.payload.articles,
		country: action.payload.country,
	};
	return updateObject(state, update);
};

const setSearchCountry = (state, action) => {
	const update = {
		country: action.payload.country,
	};
	return updateObject(state, update);
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH:
			return setSearch(state, action);
		case SET_SEARCH_COUNTRY:
			return setSearchCountry(state, action);
	}
	return state;
};

export default searchReducer;
