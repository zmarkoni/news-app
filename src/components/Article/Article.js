import React from 'react';
import { useHistory } from 'react-router-dom';

const Article = (props) => {
	const { article } = props;
	const history = useHistory();

	const clickHandler = (path) => {
		//console.log('Article.js path: ', path);
		let pathTemp = path + article.title.replace(/[\W_]/g, '').toLowerCase();
		history.push(pathTemp);
	};

	return (
		<li className="article columnControl__item">
			<h2 className="article__title">{article.title}</h2>
			<div className="article__imageWrapper">
				<img
					className="article__image"
					src={article.urlToImage}
					alt={article.title}
				/>
			</div>
			<p className="article__description">{article.description}</p>
			<button
				className="article__button"
				onClick={() => clickHandler('/article/:id=')}
			>
				More {'>'}
			</button>
		</li>
	);
};

export default Article;
