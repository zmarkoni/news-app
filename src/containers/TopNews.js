import React, { useEffect, useMemo, useState } from 'react';
import { withTranslation, Trans } from 'react-i18next';

import { config } from '../shared/config';
import { http } from '../shared/utility';

//components
import Loader from '../components/Loader/Loader';
import ListArticles from '../components/ListArticles/ListArticles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setTopHeadlines } from '../store/actions/topHeadlines';

const TopNews = () => {
	const dispatch = useDispatch();
	const country = useSelector((state) => {
		//console.log('TopNews.js state: ', state);
		return state.topHeadlinesStore.country;
	});

	const [data, setData] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;

	useEffect(() => {
		const url = apiUrl + topHeadlines + `country=${country}&` + apiKey;
		fetchData(url);
	}, [country]);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		setData(result);
		let payload = {
			articles: result.articles,
			country: country,
		};
		result.articles && dispatch(setTopHeadlines(payload));
	};

	const renderListArticles = useMemo(() => {
		if (data) {
			return (
				<ListArticles
					from={'articlesByTopHeadlines'}
					articleList={data.articles}
				/>
			);
		}
	}, [data]);

	return (
		<section className="topNews">
			<h1 className="gridView">
				<Trans>Top news from</Trans>{' '}
				{country === 'gb' ? 'Great Britain' : 'United States'}:
			</h1>
			{!data && <Loader />}
			<ul className="listArticles gridView columnControl__col3">
				{renderListArticles}
			</ul>
		</section>
	);
};

export default withTranslation('translations')(TopNews);
