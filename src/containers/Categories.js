import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../shared/config';
import { useSelector, useDispatch } from 'react-redux';
import { setSources } from '../store/actions/sources';
import { setCountry } from '../store/actions/articles';
import { http, limitMaxNumberOfElements } from '../shared/utility';
import Loader from '../components/Loader/Loader';
import ListCategories from '../components/ListCategories/ListCategories';

const Categories = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, sources } = config;
	const country = useSelector((state) => state.articlesStore.country);

	useEffect(() => {
		const url = apiUrl + sources + `country=${country}&` + apiKey;
		fetchData(url);
	}, [country]);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		// max 5
		let limitedResult = limitMaxNumberOfElements(result.sources, 5);
		setData(limitedResult);
		limitedResult && dispatch(setSources(limitedResult));
		country && dispatch(setCountry(country));
	};

	const renderCategoriesList = useMemo(() => {
		if (data) {
			return <ListCategories categoriesList={data} />;
		}
	}, [data]);

	return (
		<div className="categories">
			<h1 className="gridView">
				Top 5 news by categories from {country === 'gb' ? 'GB' : 'US'}:
			</h1>
			{!data && <Loader />}
			{renderCategoriesList}
		</div>
	);
};

export default Categories;
