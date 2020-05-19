import React, { useMemo, useState } from 'react';
import { config } from '../../shared/config';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {
	//errorHandler,
	uniqueArray,
	//limitMaxNumberOfElements,
} from '../../shared/utility';
//import ListArticles from '../ListArticles/ListArticles';
//import ArrowDown from '../../resources/icons/arrow-down.svg';
//import ArrowUp from '../../resources/icons/arrow-up.svg';
const ListCategories = (props) => {
	//console.log('ListCategories.js props: ', props);
	const { sourcesList } = props;
	const [isFetching, setIsFetching] = useState(true);
	const { apiKey, apiUrl, topHeadlines } = config;
	//const dispatch = useDispatch();
	const country = useSelector((state) => state.articlesStore.country);

	// need fetch for every category
	/* useEffect(() => {
		
	}, [country, category]); */
	async function fetchArticles(catName) {
		const url =
			apiUrl +
			topHeadlines +
			`country=${country}&` +
			`category=${catName}&` +
			apiKey;

		let response = await fetch(url);
		let articlesByCat = await response.json();

		await new Promise((resolve) => setTimeout(resolve, 3000));
		setIsFetching(false);
		console.log('articlesByCat: ', articlesByCat);
		return articlesByCat;
	}

	const renderListCategories = useMemo(() => {
		if (sourcesList && sourcesList.length) {
			let categories = uniqueArray(sourcesList, 'category');

			categories.map((catName, index) => {
				fetchArticles(catName, index);
			});
		}
	}, [sourcesList]);

	return (
		<ul className="category__list gridView columnControl__col3">
			{isFetching && <Loader />}
			{renderListCategories}
		</ul>
	);
};

export default ListCategories;
