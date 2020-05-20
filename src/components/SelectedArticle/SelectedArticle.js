import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SelectedArticle = () => {
	const history = useHistory();
	const url = new URL(location.href);
	const articleTitle = url.searchParams.get('title');
	const from = url.searchParams.get('from');
	let articlesList = useRef();

	const sourcedArticlesFromCategory = useSelector(
		(state) => state.sourcesStore.sourcedArticlesFromCategory
	);

	const sourcedArticles = useSelector(
		(state) => state.sourcesStore.sourcedArticles
	);

	const articlesBySearch = useSelector((state) => state.searchStore.articles);

	const articlesByTopHeadlines = useSelector(
		(state) => state.topHeadlinesStore.articles
	);

	if (from === 'sourcedArticlesFromCategory') {
		articlesList.current = sourcedArticlesFromCategory;
	} else if (from === 'sourcedArticles') {
		articlesList.current = sourcedArticles;
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
