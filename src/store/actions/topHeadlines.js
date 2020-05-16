export const FETCH_TOP_HEADLINES = 'FETCH_TOP_HEADLINES';

export const fetchTopHeadlines = (result) => {
	return { type: FETCH_TOP_HEADLINES, result };
};
