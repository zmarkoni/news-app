import React, { useMemo } from 'react';
//import Article from '../Article/Article';
import ArrowDown from '../../resources/icons/arrow-down.svg';
//import ArrowUp from '../../resources/icons/arrow-up.svg';
const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { categoriesList } = props;
	//console.log('ListCategories.js categoriesList: ', categoriesList);

	const renderListCategories = useMemo(() => {
		if (categoriesList && categoriesList.length) {
			let categoriesArray = [];

			categoriesList.map((source, index) => {
				if (source.id && source.category) {
					categoriesArray.push(
						<li className="category__item" key={index}>
							<h2 className="category__title">
								{source.category}
							</h2>
							<button>
								<ArrowDown className="arrow arrow__up" />
							</button>
						</li>
						//<Article article={article} key={article.title} />
					);
				}
			});

			return categoriesArray;
		}
	}, [categoriesList]);

	return (
		<ul className="category__list gridView columnControl__col3">
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
