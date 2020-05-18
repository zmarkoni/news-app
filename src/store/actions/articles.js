export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_COUNTRY = 'SET_COUNTRY';

export const setArticles = (data) => {
	return { type: SET_ARTICLES, data };
};

export const setCountry = (data) => {
	return { type: SET_COUNTRY, data };
};
