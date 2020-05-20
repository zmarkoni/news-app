import React from 'react';
import { useHistory } from 'react-router-dom';

const Article = (props) => {
	const { article, from } = props;
	const history = useHistory();

	const clickHandler = () => {
		let title = article.title.replace(/[\W_]/g, '').toLowerCase();
		history.push(`/article?from=${from}&title=${title}`);
	};

	return (
		<li
			className={`article ${
				props.swiper === true ? 'swiper-slide' : ''
			} ${props.columnControl === true ? 'columnControl__item' : ''}`}
		>
			{props.heading === 'h3' ? (
				<h3 className="article__title">{article.title}</h3>
			) : (
				<h2 className="article__title">{article.title}</h2>
			)}

			<div className="article__imageWrapper">
				<img
					className="article__image"
					src={article.urlToImage}
					alt={article.title}
				/>
			</div>
			<p className="article__description">{article.description}</p>
			<button className="article__button" onClick={clickHandler}>
				More {'>'}
			</button>
		</li>
	);
};

export default Article;
