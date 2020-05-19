export const SET_SOURCES = 'SET_SOURCES';
export const SET_SOURCED_ARTICLES = 'SET_SOURCED_ARTICLES';

export const setSources = (data) => {
	return { type: SET_SOURCES, data };
};

export const setSourcedArticles = (data) => {
	return { type: SET_SOURCED_ARTICLES, data };
};
