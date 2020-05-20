export const SET_SEARCH = 'SET_SEARCH';
export const SET_SEARCH_COUNTRY = 'SET_SEARCH_COUNTRY';

export const setSearch = (payload) => {
	return { type: SET_SEARCH, payload };
};

export const setSearchCountry = (payload) => {
	return { type: SET_SEARCH_COUNTRY, payload };
};
