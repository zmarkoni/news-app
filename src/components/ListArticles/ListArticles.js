import React, { useMemo } from 'react';
import Article from '../Article/Article';

const ListArticles = (props) => {
	//console.log('ListArticles.js props: ', props);
	const { articleList } = props;

	console.log('ListArticles.js props: ', articleList);

	const renderArticle = useMemo(() => {
		if (articleList && articleList.length) {
			let articlesArray = [];

			articleList.map((article) => {
				if (article.source.id || article.source.name) {
					articlesArray.push(
						<Article
							article={article}
							/* key={
								article.source.id ||
								article.source.name +
									'_' +
									article.source.publishedAt
							} */
							key={article.title}
						/>
					);
				}
			});

			return articlesArray;
		}
	}, [articleList]);

	return (
		<ul className="listArticles gridView columnControl__col3">
			{renderArticle}
		</ul>
	);
};

export default ListArticles;
