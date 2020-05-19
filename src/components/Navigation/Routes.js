import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TopNews from '../../containers/TopNews';
import Categories from '../../containers/Categories';
import Search from '../../containers/Search';
import NoMatch from '../../components/NoMatch/NoMatch';
import SelectedArticle from '../../components/SelectedArticle/SelectedArticle';

const Routes = () => {
	return (
		<React.Fragment>
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
				<Route path="/article" component={SelectedArticle} />
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</React.Fragment>
	);
};

export default Routes;
