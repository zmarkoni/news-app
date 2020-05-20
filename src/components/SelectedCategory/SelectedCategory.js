import React, { useEffect, useMemo, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSourcedArticlesFromCategory } from '../../store/actions/sources';
import { http } from '../../shared/utility';
import { config } from '../../shared/config';
import Loader from '../../components/Loader/Loader';
import ListArticles from '../../components/ListArticles/ListArticles';

const SelectedCategory = (props) => {
	const { t } = props;
	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.sourcesStore.country);
	const match = useRouteMatch({
		path: '/category/:id=*',
		strict: true,
		sensitive: true,
	});
	const category = match.params[0];
	//console.log('selectedArticle.js match: ', match);

	useEffect(() => {
		fetchData();
	}, [country]);

	const fetchData = async () => {
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
			return (
				<ListArticles
					from={'sourcedArticlesFromCategory'}
					articleList={data.articles}
				/>
			);
		}
	}, [data]);

	return (
		<div className="SelectedCategory">
			<h1 className="gridView">
				{`Top ${category} ${t('news from')} ${country}`}
			</h1>
			{!data && <Loader />}
			<ul className="listArticles gridView columnControl__col3">
				{renderListArticles}
			</ul>
		</div>
	);
};

export default withTranslation('translations')(SelectedCategory);
