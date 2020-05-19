import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { uniqueArray, limitMaxNumberOfElements } from '../../shared/utility';
import ListArticles from '../ListArticles/ListArticles';
import ArrowDown from '../../resources/icons/arrow-down.svg';
//import ArrowUp from '../../resources/icons/arrow-up.svg';
const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { sourcesList } = props;
	const articles = useSelector((state) => state.articlesStore.articles);

	const renderListCategories = useMemo(() => {
		if (sourcesList && sourcesList.length) {
			let categoriesArray = [];
			let categories = uniqueArray(sourcesList, 'category');

			categories.map((catName, index) => {
				let categoriesByNameArray = sourcesList.filter(
					(cat) => cat.category === catName
				);
				//console.log('categoriesByNameArray: ', categoriesByNameArray);

				let articlesByCat = [];
				//newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=999191696e6a4f8dbee0dbcc4a6e8036
				//newsapi.org/v2/sources?&country=us&category=entertainment&apiKey=999191696e6a4f8dbee0dbcc4a6e8036

				articles.map((article) => {
					categoriesByNameArray.map((cat) => {
						/* console.log('cat.name: ', cat.name);
						console.log(
							'article.source.name: ',
							article.source.name
						); */
						if (article.source.name === cat.name) {
							articlesByCat.push(article);
						}
					});
					return articlesByCat;
				});

				console.log('articlesByCat: ', articlesByCat);

				let limitedArticlesByCat = limitMaxNumberOfElements(
					articlesByCat,
					5
				);
				console.log('limitedArticlesByCat: ', limitedArticlesByCat);
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
	}, [sourcesList]);

	return (
		<ul className="category__list gridView columnControl__col3">
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
