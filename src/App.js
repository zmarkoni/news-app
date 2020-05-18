import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Navigation/Routes';

const App = () => {
	//console.log('App.js props: ', props);
	return (
		<div className="layout">
			<Navigation />
			<main role="main" className="main">
				<Routes />
			</main>
		</div>
	);
};

export default App;
