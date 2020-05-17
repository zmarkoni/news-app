import { useEffect, useState, useReducer } from 'react';
import dataFetchReducer from '../store/reducers/dataFetchReducer';
import { http } from '../shared/utility';

const useDataApi = (initialUrl, httpMethod, initialData) => {
	const [url, setUrl] = useState(initialUrl);
	const [method, setMethod] = useState(httpMethod);

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: initialData,
	});

	useEffect(() => {
		let didCancel = false;

		const fetchData = async () => {
			dispatch({ type: 'FETCH_INIT' });

			try {
				const result = await http(url, method);

				if (!didCancel) {
					dispatch({ type: 'FETCH_SUCCESS', payload: result });
				}
			} catch (error) {
				if (!didCancel) {
					dispatch({ type: 'FETCH_FAILURE' });
				}
			}
		};

		fetchData();

		return () => {
			didCancel = true;
		};
	}, [url, method]);

	return [state, setUrl, setMethod];
};

export default useDataApi;
