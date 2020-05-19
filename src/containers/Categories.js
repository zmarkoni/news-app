import React from 'react';
import AllCategories from '../components/AllCategories/AllCategories';

const Categories = () => {
	return (
		<div className="categories gridView">
			<h1>Top 5 news by categories from GB(country):</h1>
			<AllCategories />
		</div>
	);
};

export default Categories;
