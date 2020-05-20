export const SET_TOP_HEADLINES = 'SET_TOP_HEADLINES';
export const SET_TOP_HEADLINES_COUNTRY = 'SET_TOP_HEADLINES__COUNTRY';

export const setTopHeadlines = (payload) => {
	return { type: SET_TOP_HEADLINES, payload };
};

export const setTopHeadlinesCountry = (payload) => {
	return { type: SET_TOP_HEADLINES_COUNTRY, payload };
};
