export const config = {
	apiKey: 'apiKey=999191696e6a4f8dbee0dbcc4a6e8036',
	apiUrl: 'http://newsapi.org/v2/',
	countryUS: 'country=us&',
	countryGB: 'country=gb&',
	sources: 'sources=',
	topHeadlines: 'top-headlines?',
	everything: 'everything?',
};

// Example how to build url
/* 
const url =
    'http://newsapi.org/v2/top-headlines?' +
	'country=us&' +
    'apiKey=999191696e6a4f8dbee0dbcc4a6e8036'; 
*/

//const exampleUrl = apiUrl + topHeadlines + sources + '&' + apiKey;
