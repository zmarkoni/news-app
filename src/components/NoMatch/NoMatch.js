import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
	let location = useLocation();

	return (
		<div className="noMatch">
			<h1>
				No match for <code>{location.pathname}</code>
			</h1>
		</div>
	);
};

export default NoMatch;
