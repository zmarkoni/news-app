import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { errorHandler } from '../../shared/utility';
import { useHistory } from 'react-router-dom';

const SelectedArticle = () => {
	const history = useHistory();
	const articleList = useSelector((state) => state.articlesStore.articles);
	const match = useRouteMatch({
		path: '/article/:id=*',
		strict: true,
		sensitive: true,
	});
	//console.log('selectedArticle.js match: ', match);

	const articleTitle = match.params[0];
	const article = articleList.filter(
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
