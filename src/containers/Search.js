import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { http } from '../shared/utility';
import { config } from '../shared/config';
import ListArticles from '../components/ListArticles/ListArticles';

const Search = () => {
	const [hints, setData] = useState('');
	const [query, setQuery] = useState('');
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.articlesStore.country);
	const inputRef = useRef();

	useEffect(() => {
		if (query && query.length) {
			const url =
				apiUrl +
				topHeadlines +
				`country=${country ? country : 'gb'}&` +
				`q=${query}&` +
				apiKey;

			const timer = setTimeout(() => {
				if (query === inputRef.current.value) {
					fetchData(url);
				}
			}, 500);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [country, query, inputRef]);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		//console.log('Search.js result: ', result.articles);
		setData(result.articles);
	};

	//console.log('Search.js hints: ', hints.length);

	return (
		<section className="search">
			<div className="gridView">
				<h1 className="search__title">
					Search top news from{' '}
					{country === 'gb' ? 'Great Britain' : 'United States'} by
					term:
				</h1>
				<input
					className="search__input"
					type="text"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					ref={inputRef}
					placeholder="Search term..."
				/>
			</div>
			{hints.length > 0 && <ListArticles articleList={hints} />}
		</section>
	);
};

export default Search;
