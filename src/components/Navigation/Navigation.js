import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav role="navigation" className="nav">
			<ul>
				<li>
					<NavLink
						exact={true}
						className="link"
						activeClassName="is-active"
						to="/"
					>
						Top News
					</NavLink>
				</li>
				<li>
					<NavLink
						className="link"
						activeClassName="is-active"
						to="/categories"
					>
						Categories
					</NavLink>
				</li>
				<li>
					<NavLink
						className="link"
						activeClassName="is-active"
						to="/search"
					>
						Search
					</NavLink>
				</li>
				<li>
					<NavLink
						className="link link--disabled"
						to="/singleArticle"
					>
						singleArticle
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
