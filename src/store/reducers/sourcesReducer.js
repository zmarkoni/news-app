import { updateObject } from '../../shared/utility';
import {
	SET_SOURCES,
	SET_SOURCED_ARTICLES,
	SET_SOURCES_CATEGORY,
	SET_SOURCES_COUNTRY,
	SET_SOURCED_ARTICLES_FROM_CATEGORY,
} from '../actions/sources';

const initialState = {
	sources: [],
	sourcedArticles: [],
	sourcedArticlesFromCategory: [],
	country: 'gb',
	category: '',
};

const setSourcedArticlesFromCategory = (state, action) => {
	const update = {
		sourcedArticlesFromCategory: action.payload.sourcedArticlesFromCategory,
		country: action.payload.country,
		category: action.payload.category,
	};
	return updateObject(state, update);
};

const setSourcedArticles = (state, action) => {
	const update = {
		sourcedArticles: action.payload.sourcedArticles,
		country: action.payload.country,
		category: action.payload.category,
	};
	return updateObject(state, update);
};

const setSources = (state, action) => {
	const update = {
		sources: action.payload.sources,
		country: action.payload.country,
	};
	return updateObject(state, update);
};

const setSourcesCountry = (state, action) => {
	const update = {
		country: action.payload.country,
	};
	return updateObject(state, update);
};

const setSourcesCategory = (state, action) => {
	const update = {
		category: action.payload.category,
	};
	return updateObject(state, update);
};

const sourcesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SOURCES:
			return setSources(state, action);
		case SET_SOURCED_ARTICLES:
			return setSourcedArticles(state, action);
		case SET_SOURCES_CATEGORY:
			return setSourcesCategory(state, action);
		case SET_SOURCES_COUNTRY:
			return setSourcesCountry(state, action);
		case SET_SOURCED_ARTICLES_FROM_CATEGORY:
			return setSourcedArticlesFromCategory(state, action);
	}
	return state;
};

export default sourcesReducer;
