import React from 'react';

const Article = (props) => {
	const { article } = props;
	return (
		<div className="article columnControl__item">
			<h2 className="article__title">{article.title}</h2>
			<div className="article__imageWrapper">
				<img
					className="article__image"
					src={article.urlToImage}
					alt={article.title}
				/>
			</div>
			<div className="article__description">{article.description}</div>
			<a className="article__link" href={article.url}>
				More {'>'}
			</a>
		</div>
	);
};

export default Article;
