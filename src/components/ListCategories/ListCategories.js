import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../../store/actions/articles';
import { setSourcedArticles } from '../../store/actions/sources';
import {
	http,
	uniqueArray,
	limitMaxNumberOfElements,
} from '../../shared/utility';
import { config } from '../../shared/config';
import ListArticles from '../ListArticles/ListArticles';
import ArrowDown from '../../resources/icons/arrow-down.svg';
//import ArrowUp from '../../resources/icons/arrow-up.svg';
const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { sourcesList } = props;
	const [articlesByCat, setArticlesByCat] = useState([]);
	const { apiKey, apiUrl, topHeadlines } = config;
	const dispatch = useDispatch();
	const country = useSelector((state) => state.articlesStore.country);

	// need fetch for every category
	useEffect(() => {
		let categories = uniqueArray(sourcesList, 'category');
		categories.map((catName) => {
			let url = (url =
				apiUrl +
				topHeadlines +
				`country=${country}&` +
				`category=${catName}&` +
				apiKey);
			fetchData(url);
		});
	}, []);

	const fetchData = async (url) => {
		const result = await http(url, 'GET');
		let articles = [...result.articles];
		setArticlesByCat(articles);
		console.log('ListCategories.js fetchData:articles => ', articles);
		dispatch(setSourcedArticles(articles));
		dispatch(setCountry(country));
	};

	const renderListCategories = useMemo(() => {
		if (
			sourcesList &&
			sourcesList.length &&
			articlesByCat &&
			articlesByCat.length
		) {
			let categoriesArray = [];
			let categories = uniqueArray(sourcesList, 'category');

			categories.map((catName, index) => {
				let limitedArticlesByCat = limitMaxNumberOfElements(
					articlesByCat,
					5
				);
				categoriesArray.push(
					<li className="category__item" key={index}>
						<div className="category__header">
							<h2 className="category__title">{catName}</h2>
							<button>
								<ArrowDown className="arrow arrow__up" />
							</button>
						</div>
						<div className="category__list">
							<ListArticles articleList={limitedArticlesByCat} />
						</div>
					</li>
				);
			});

			return categoriesArray;
		}
	}, [articlesByCat]);

	return (
		<ul className="category__list gridView columnControl__col3">
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
