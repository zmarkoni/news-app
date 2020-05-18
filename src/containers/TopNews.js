import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../shared/config';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles, setCountry } from '../store/actions/articles';
//import useDataApi from '../hooks/useDataApi';
import Loader from '../components/Loader/Loader';
import ListArticles from '../components/ListArticles/ListArticles';
import { http } from '../shared/utility';

const TopNews = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => {
		//console.log('TopNews articlesStore: ', state.articlesStore);
		return state.articlesStore.country;
	});

	useEffect(() => {
		const url =
			apiUrl +
			topHeadlines +
			`country=${country ? country : 'gb'}&` +
			apiKey;
		fetchData(url);
	}, [country]);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		setData(result);
		dispatch(setArticles(result.articles));
		dispatch(setCountry(country));
	};

	const renderListArticles = useMemo(() => {
		if (data) {
			return <ListArticles articleList={data.articles} />;
		}
	}, [data]);

	return (
		<section className="topNews">
			<h1 className="gridView">Top news from {country}:</h1>
			{!data && <Loader />}
			{renderListArticles}
		</section>
	);
};

export default TopNews;
