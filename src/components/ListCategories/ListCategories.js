import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { uniqueArray } from '../../shared/utility';
import ListArticlesByCategory from '../ListArticlesByCategory/ListArticlesByCategory';
import ArrowDown from '../../resources/icons/arrow-down.svg';
import ArrowUp from '../../resources/icons/arrow-up.svg';

const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { sourcesList } = props;
	const history = useHistory();
	const [toggleArrow, setToggleArrow] = useState(false);

	const clickedCatTitleHandler = (catName, path) => {
		let pathTemp = path + catName.replace(/[\W_]/g, '').toLowerCase();
		history.push(pathTemp);
	};

	const clickedArrowHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setToggleArrow(!toggleArrow);
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
								{toggleArrow ? (
									<ArrowUp className="listCategories__arrow" />
								) : (
									<ArrowDown className="listCategories__arrow" />
								)}
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
	}, [sourcesList, toggleArrow]);

	return (
		<ul className="listCategories listView withBoarder">
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
