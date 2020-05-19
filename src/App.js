import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Navigation/Routes';
//import { useErrorBoundary } from '..//node_modules/use-error-boundary/lib/use-error-boundary';
const App = () => {
	//console.log('App.js props: ', props);
	/* const {
		ErrorBoundary, // class - The react component to wrap your children in. This WILL NOT CHANGE
	} = useErrorBoundary(); */

	return (
		<React.Fragment>
			<div className="layout">
				<Navigation />
				<main role="main" className="main">
					<Routes />
				</main>
			</div>
		</React.Fragment>
	);
};

export default App;
