import React, { useMemo } from 'react';
import Article from '../Article/Article';

const ListArticles = (props) => {
	//console.log('ListArticles.js props: ', props);
	const { articleList, from } = props;
	//console.log('ListArticles.js articleList: ', articleList);

	const renderArticle = useMemo(() => {
		if (articleList && articleList.length) {
			let articlesArray = [];

			articleList.map((article) => {
				if (article.source.id || article.source.name) {
					articlesArray.push(
						<Article
							from={from}
							columnControl={true}
							article={article}
							key={article.title}
						/>
					);
				}
			});

			return articlesArray;
		}
	}, [articleList]);

	return <React.Fragment>{renderArticle}</React.Fragment>;
};

export default ListArticles;
