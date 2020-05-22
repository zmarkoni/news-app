import React, { useEffect, useMemo, useState } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { config } from '../shared/config';
import { useSelector, useDispatch } from 'react-redux';
import { setSources } from '../store/actions/sources';
import { http } from '../shared/utility';
import Loader from '../components/Loader/Loader';
import ListCategories from '../components/ListCategories/ListCategories';

const Categories = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, sources } = config;
	const country = useSelector((state) => state.sourcesStore.country);

	useEffect(() => {
		if (country) {
			const fetchData = async () => {
				const url = apiUrl + sources + `country=${country}&` + apiKey;
				const result = await http(url, 'GET');
				setData(result.sources);
				const payload = {
					sources: result.sources,
					country: country,
				};
				result.sources && dispatch(setSources(payload));
			};
			fetchData();
		}
	}, [country, apiKey, apiUrl, sources, dispatch]);

	const renderCategoriesList = useMemo(() => {
		if (data) {
			return (
				<ListCategories from={'sourcedArticles'} sourcesList={data} />
			);
		}
	}, [data]);

	return (
		<div className="categories">
			<h1 className="listView">
				<Trans>Top 5 news by categories from </Trans>
				{country === 'gb' ? 'GB' : 'US'}:
			</h1>
			{!data && <Loader />}
			{renderCategoriesList}
		</div>
	);
};

export default withTranslation('translations')(Categories);
