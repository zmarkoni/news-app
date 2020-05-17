import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav role="navigation" className="nav">
			<ul>
				<li>
					<NavLink exact={true} activeClassName="is-active" to="/">
						Top News
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="is-active" to="/categories">
						Categories
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="is-active" to="/search">
						Search
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
