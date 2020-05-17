import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TopNews from './containers/TopNews';
import Categories from './containers/Categories';
import Search from './containers/Searching';
import NoMatch from './components/NoMatch/NoMatch';
import Navigation from './components/Nav/Navigation';

const App = () => {
	//console.log('App.js props: ', props);

	return (
		<div className="layout">
			<Navigation />
			<main role="main" className="main">
				<Switch>
					<Route exact path="/">
						<TopNews />
					</Route>
					<Route path="/categories">
						<Categories />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/top-news">
						<TopNews />
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</main>
		</div>
	);
};

export default App;
