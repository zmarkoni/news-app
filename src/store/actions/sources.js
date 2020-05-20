export const SET_SOURCES = 'SET_SOURCES';
export const SET_SOURCED_ARTICLES = 'SET_SOURCED_ARTICLES';
export const SET_SOURCES_COUNTRY = 'SET_SOURCES_COUNTRY';
export const SET_SOURCES_CATEGORY = 'SET_SOURCES_CATEGORY';
export const SET_SOURCED_ARTICLES_FROM_CATEGORY =
	'SET_SOURCED_ARTICLES_FROM_CATEGORY';

export const setSourcedArticlesFromCategory = (payload) => {
	return { type: SET_SOURCED_ARTICLES_FROM_CATEGORY, payload };
};

export const setSourcesCategory = (payload) => {
	return { type: SET_SOURCES_CATEGORY, payload };
};

export const setSourcesCountry = (payload) => {
	return { type: SET_SOURCES_COUNTRY, payload };
};

export const setSources = (payload) => {
	return { type: SET_SOURCES, payload };
};

export const setSourcedArticles = (payload) => {
	return { type: SET_SOURCED_ARTICLES, payload };
};
