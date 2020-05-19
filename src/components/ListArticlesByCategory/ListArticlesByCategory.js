import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { config } from '../../shared/config';
//import { setSourcedArticles } from '../../store/actions/sources';
import { http, limitMaxNumberOfElements } from '../../shared/utility';
//import Loader from '../components/Loader/Loader';
import Article from '../Article/Article';

const ListArticles = (props) => {
	//console.log('ListArticles.js props: ', props);
	const { catName } = props;
	//const dispatch = useDispatch();
	const [articlesByCatName, setArticlesByCatName] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.articlesStore.country);
	//const [articlesByCat, setArticlesByCat] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const url =
			apiUrl +
			topHeadlines +
			`category=${catName}&` +
			`country=${country}&` +
			apiKey;

		const result = await http(url, 'GET');
		setArticlesByCatName(result.articles);
		/* dispatch(setSources(result.sources));
		dispatch(setCountry(country)); */
	};

	const renderArticle = useMemo(() => {
		if (articlesByCatName && articlesByCatName.length) {
			let articlesArray = [];
			let limitedArticlesByCat = limitMaxNumberOfElements(
				articlesByCatName,
				5
			);

			limitedArticlesByCat.map((article) => {
				if (article.source.id || article.source.name) {
					articlesArray.push(
						<Article article={article} key={article.title} />
					);
				}
			});

			return articlesArray;
		}
	}, [articlesByCatName]);

	return <React.Fragment>{renderArticle}</React.Fragment>;
};

export default ListArticles;
