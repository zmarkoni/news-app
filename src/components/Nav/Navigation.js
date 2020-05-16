import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="nav">
			<nav>
				<ul>
					<li>
						<Link to="/top-news">Top News</Link>
					</li>
					<li>
						<Link to="/categories">Categories</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
