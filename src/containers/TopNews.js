import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../shared/config';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles, setCountry } from '../store/actions/articles';
import { http } from '../shared/utility';
import Loader from '../components/Loader/Loader';
import ListArticles from '../components/ListArticles/ListArticles';

const TopNews = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.articlesStore.country);

	useEffect(() => {
		const url = apiUrl + topHeadlines + `country=${country}&` + apiKey;
		fetchData(url);
	}, [country]);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		setData(result);
		result.articles && dispatch(setArticles(result.articles));
		country && dispatch(setCountry(country));
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
			{renderListArticles}
		</section>
	);
};

export default TopNews;
