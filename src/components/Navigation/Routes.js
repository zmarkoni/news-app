import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import TopNews from '../../containers/TopNews';
import Categories from '../../containers/Categories';
import Search from '../../containers/Search';
import NoMatch from '../../components/NoMatch/NoMatch';
import SelectedArticle from '../../components/SelectedArticle/SelectedArticle';
import SelectedCategory from '../../components/SelectedCategory/SelectedCategory';

const Routes = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/">
					<Redirect to="/topNews" />
				</Route>
				<Route exact path="/topNews" component={TopNews} />
				<Route path="/categories" component={Categories} />
				<Route path="/search" component={Search} />
				<Route path="/article" component={SelectedArticle} />
				<Route path="/category" component={SelectedCategory} />
				<Route component={NoMatch} />
				{/* <Redirect from="/article" to="/selectedArticle" /> */}
			</Switch>
		</React.Fragment>
	);
};

export default Routes;
