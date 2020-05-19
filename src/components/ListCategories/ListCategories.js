import React, { useMemo } from 'react';
import { uniqueArray } from '../../shared/utility';
import ListArticlesByCategory from '../ListArticlesByCategory/ListArticlesByCategory';
import ArrowDown from '../../resources/icons/arrow-down.svg';
//import ArrowUp from '../../resources/icons/arrow-up.svg';

const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { sourcesList } = props;

	const renderListCategories = useMemo(() => {
		if (sourcesList && sourcesList.length) {
			let categoriesArray = [];
			let categories = uniqueArray(sourcesList, 'category');

			categories.map((catName, index) => {
				categoriesArray.push(
					<li className="listCategories__item" key={index}>
						<div className="listCategories__header">
							<h2 className="listCategories__title">
								<button className="listCategories__title--button">
									{catName}
								</button>
							</h2>
							<button className="listCategories__button">
								<ArrowDown className="listCategories__arrow listCategories__arrow--up" />
							</button>
						</div>
						<ul className="listCategories__list">
							<ListArticlesByCategory catName={catName} />
						</ul>
					</li>
				);
			});

			return categoriesArray;
		}
	}, [sourcesList]);

	return (
		<ul className="listCategories listView withBoarder">
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
