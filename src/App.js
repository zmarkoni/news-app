import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Navigation/Routes';
import { HashRouter } from 'react-router-dom';
//import { useErrorBoundary } from '..//node_modules/use-error-boundary/lib/use-error-boundary';
const App = () => {
	//console.log('App.js props: ', props);
	/* const {
		ErrorBoundary, // class - The react component to wrap your children in. This WILL NOT CHANGE
	} = useErrorBoundary(); */

	return (
		<HashRouter>
			<div className="layout">
				<Navigation />
				<main role="main" className="main">
					<Routes />
				</main>
			</div>
		</HashRouter>
	);
};

export default App;
