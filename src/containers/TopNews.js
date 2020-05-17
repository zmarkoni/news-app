import React, { useEffect } from 'react';
import ListArticles from '../components/ListArticles/ListArticles';
import useDataApi from '../hooks/useDataApi';
import Loader from '../components/Loader/Loader';

const TopNews = () => {
	const [{ data, isLoading }] = useDataApi(
		'https://newsapi.org/v2/top-headlines?country=us&apiKey=999191696e6a4f8dbee0dbcc4a6e8036',
		'GET',
		null
	);

	useEffect(() => {
		if (data) {
			console.log('TopNews.js data: ', data);
		}
	}, [data]);

	return (
		<section className="topNews">
			<h1>Top news from country:</h1>
			{isLoading ? <Loader /> : <ListArticles />}
		</section>
	);
};

export default TopNews;
