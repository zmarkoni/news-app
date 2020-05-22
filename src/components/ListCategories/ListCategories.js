import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { uniqueArray } from '../../shared/utility';
import ListArticlesByCategory from '../ListArticlesByCategory/ListArticlesByCategory';

const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { sourcesList, from } = props;
	const history = useHistory();

	const clickedCatTitleHandler = useCallback(
		(catName, path) => {
			let pathTemp = path + catName.replace(/[\W_]/g, '').toLowerCase();
			history.push(pathTemp);
		},
		[history]
	);

	const clickedArrowHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		event.currentTarget.parentElement.parentElement.classList.toggle(
			'hideList'
		);
		event.currentTarget.classList.toggle('isOpen');
	};

	const renderListCategories = useMemo(() => {
		if (sourcesList && sourcesList.length) {
			let categoriesArray = [];
			let categories = uniqueArray(sourcesList, 'category');

			categories.map((catName, index) => {
				categoriesArray.push(
					<li className="listCategories__item" key={index}>
						<div className="listCategories__header">
							<h2 className="listCategories__title">
								<button
									className="listCategories__title--button"
									onClick={() =>
										clickedCatTitleHandler(
											catName,
											'/category/:id='
										)
									}
								>
									{catName}
								</button>
							</h2>
							<button
								className="listCategories__button"
								onClick={(event) => clickedArrowHandler(event)}
							>
								<div className="listCategories__arrow"></div>
							</button>
						</div>
						<ul className="listCategories__list">
							<ListArticlesByCategory
								from={from}
								catName={catName}
							/>
						</ul>
					</li>
				);
			});

			return categoriesArray;
		}
	}, [clickedCatTitleHandler, from, sourcesList]);

	return (
		<ul className="listCategories listView withBoarder">
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
