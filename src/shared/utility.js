export const errorHandler = (message) => {
	console.error(
		'News-app error => ',
		typeof message !== 'undefined' ? message : 'undefined'
	);
};

// could use Axios as well, but it is not needed
export const http = (url, method) => {
	let fetchConfig = {
		method: method,
		header: new Headers({
			'Content-Type': 'application/json; charset=utf-8',
		}),
		credentials: 'same-origin',
		cache: 'default',
		mode: 'cors',
	};

	return fetch(url, fetchConfig)
		.then((response) => response.json())
		.then((responseData) => {
			return responseData;
		})
		.catch((error) => {
			errorHandler(error.message);
		});
};
