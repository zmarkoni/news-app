import React, { useState, useEffect, useRef } from 'react';
import { withTranslation, Trans } from 'react-i18next';

import { http } from '../shared/utility';
import { config } from '../shared/config';

// components
import ListArticles from '../components/ListArticles/ListArticles';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../store/actions/search';

const Search = () => {
	const dispatch = useDispatch();
	const [hints, setData] = useState('');
	const [query, setQuery] = useState('');
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.searchStore.country);
	const inputRef = useRef();

	useEffect(() => {
		if (query && query.length) {
			const timer = setTimeout(() => {
				if (query === inputRef.current.value) {
					const fetchData = async (country, query) => {
						const url =
							apiUrl +
							topHeadlines +
							`country=${country ? country : 'gb'}&` +
							`q=${query}&` +
							apiKey;
						const result = await http(url, 'GET');
						//console.log('Search.js result: ', result.articles);
						setData(result.articles);
						const payload = {
							articles: result.articles,
							country: country,
						};
						dispatch(setSearch(payload));
					};
					fetchData(country, query);
				}
			}, 500);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [country, query, inputRef, apiKey, apiUrl, dispatch, topHeadlines]);

	//console.log('Search.js hints: ', hints.length);

	return (
		<section className="search">
			<div className="gridView">
				<h1 className="search__title">
					<Trans>Search top news from</Trans>{' '}
					{country === 'gb' ? 'Great Britain' : 'United States'}{' '}
					<Trans>by term:</Trans>
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
			{hints.length > 0 && (
				<ul className="listArticles gridView columnControl__col3">
					<ListArticles
						from={'search'}
						columnControl={true}
						articleList={hints}
					/>
				</ul>
			)}
		</section>
	);
};

export default withTranslation('translations')(Search);
