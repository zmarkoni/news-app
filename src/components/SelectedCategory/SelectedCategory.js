import React, { useEffect, useMemo, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSourcedArticlesFromCategory } from '../../store/actions/sources';
import { http } from '../../shared/utility';
import { config } from '../../shared/config';
import Loader from '../../components/Loader/Loader';
import ListArticles from '../../components/ListArticles/ListArticles';

const SelectedCategory = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.sourcesStore.country);
	const match = useRouteMatch({
		path: '/category/:id=*',
		strict: true,
		sensitive: true,
	});
	//console.log('selectedArticle.js match: ', match);

	useEffect(() => {
		fetchData();
	}, [country]);

	const fetchData = async () => {
		const category = match.params[0];
		const url =
			apiUrl +
			topHeadlines +
			`category=${category}&` +
			`country=${country}&` +
			apiKey;

		const result = await http(url, 'GET');
		setData(result);
		const payload = {
			sourcedArticlesFromCategory: result.articles,
			category: category,
			country: country,
		};

		dispatch(setSourcedArticlesFromCategory(payload));
	};

	const renderListArticles = useMemo(() => {
		if (data) {
			return <ListArticles articleList={data.articles} />;
		}
	}, [data]);

	return (
		<div className="SelectedCategory">
			<h1 className="gridView">
				Top science(selectedCategory) news from Great Britain(country)
			</h1>
			{!data && <Loader />}
			<ul className="listArticles gridView columnControl__col3">
				{renderListArticles}
			</ul>
		</div>
	);
};

export default SelectedCategory;
