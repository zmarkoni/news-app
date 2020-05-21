import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SelectedArticle = () => {
	const history = useHistory();
	let href = window.location.href.replace('/#', '');
	let url = new URL(href);
	const articleTitle = url.searchParams.get('title');
	const from = url.searchParams.get('from');
	const catName = url.searchParams.get('category');
	let articlesList = useRef();

	const sourcedArticlesFromCategory = useSelector(
		(state) => state.sourcesStore.sourcedArticlesFromCategory
	);

	const sourcedArticles = useSelector(
		(state) => state.sourcesStore.sourcedArticlesFromCategory
	);

	const articlesBySearch = useSelector((state) => state.searchStore.articles);

	const articlesByTopHeadlines = useSelector(
		(state) => state.topHeadlinesStore.articles
	);

	if (from === 'sourcedArticlesFromCategory') {
		articlesList.current = sourcedArticlesFromCategory;
	} else if (from === 'sourcedArticles') {
		let articlesTmp = sourcedArticles.filter(
			(el) => Object.keys(el)[0] === catName
		);
		articlesList.current = articlesTmp[0][catName].articles;
	} else if (from === 'articlesByTopHeadlines') {
		articlesList.current = articlesByTopHeadlines;
	} else if (from === 'search') {
		articlesList.current = articlesBySearch;
	}

	const article = articlesList.current.filter(
		(a) => a.title.replace(/[\W_]/g, '').toLowerCase() === articleTitle
	)[0];

	const renderSelectedArticle = useMemo(() => {
		if (article) {
			let html = (
				<div className="selectedArticle">
					<h1 className="selectedArticle__title">{article.title}</h1>
					<div className="selectedArticle__imageWrapper">
						<img
							className="selectedArticle__image"
							src={article.urlToImage}
							alt={article.title}
						/>
					</div>
					<p className="selectedArticle__content">
						{article.content}
					</p>
					<button
						className="selectedArticle__button"
						onClick={() => history.goBack()}
					>
						{'<'} Back to list
					</button>
				</div>
			);
			return html;
		}
	}, [article, history]);

	return <React.Fragment>{renderSelectedArticle}</React.Fragment>;
};

export default SelectedArticle;
