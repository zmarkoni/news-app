import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { errorHandler } from '../../shared/utility';
import { useHistory } from 'react-router-dom';

const SingleArticle = () => {
	const history = useHistory();
	const articleList = useSelector((state) => state.articlesStore.articles);
	const match = useRouteMatch({
		path: '/article/:id=*',
		strict: true,
		sensitive: true,
	});
	//console.log('SingleArticle.js match: ', match);

	const articleTitle = match.params[0];
	const article = articleList.filter(
		(a) => a.title.replace(/[\W_]/g, '').toLowerCase() === articleTitle
	)[0];

	const renderSingleArticle = useMemo(() => {
		if (article) {
			let html = (
				<div className="singleArticle">
					<h1 className="singleArticle__title">{article.title}</h1>
					<div className="singleArticle__imageWrapper">
						<img
							className="singleArticle__image"
							src={article.urlToImage}
							alt={article.title}
						/>
					</div>
					<p className="singleArticle__content">{article.content}</p>
					<button
						className="singleArticle__button"
						onClick={() => history.goBack()}
					>
						{'<'} Back to list
					</button>
				</div>
			);
			return html;
		}
	}, [article, history]);

	return <React.Fragment>{renderSingleArticle}</React.Fragment>;
};

export default SingleArticle;
