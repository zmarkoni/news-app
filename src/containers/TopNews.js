import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../shared/config';
import { useSelector, useDispatch } from 'react-redux';
import { setTopHeadlines } from '../store/actions/topHeadlines';
import { http } from '../shared/utility';
import Loader from '../components/Loader/Loader';
import ListArticles from '../components/ListArticles/ListArticles';

const TopNews = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector(
		(state) => state.topHeadlinesStore.topHeadlines.country
	);

	useEffect(() => {
		const url = apiUrl + topHeadlines + `country=${country}&` + apiKey;
		fetchData(url);
	}, [country]);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		setData(result);
		let payload = {
			topHeadlines: result.articles,
			country: country,
		};
		result.articles && dispatch(setTopHeadlines(payload));
	};

	const renderListArticles = useMemo(() => {
		if (data) {
			return <ListArticles articleList={data.articles} />;
		}
	}, [data]);

	return (
		<section className="topNews">
			<h1 className="gridView">
				Top news from{' '}
				{country === 'gb' ? 'Great Britain' : 'United States'}:
			</h1>
			{!data && <Loader />}
			<ul className="listArticles gridView columnControl__col3">
				{renderListArticles}
			</ul>
		</section>
	);
};

export default TopNews;
