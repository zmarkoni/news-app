import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerIcon from '../../resources/icons/burger-menu.svg';
const Navigation = () => {
	const [navState, setNavState] = useState(false);
	const clickHandler = () => {
		setNavState(!navState);
	};

	return (
		<div className="nav">
			<BurgerIcon className="burgerIcon" onClick={clickHandler} />

			<nav
				role="navigation"
				className={`navigation navigation--${
					navState ? 'active' : 'disabled'
				}`}
			>
				<ul>
					<li>
						<NavLink
							exact={true}
							className="link"
							activeClassName="is-active"
							to="/"
							onClick={clickHandler}
						>
							Top News
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							activeClassName="is-active"
							to="/categories"
							onClick={clickHandler}
						>
							Categories
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							activeClassName="is-active"
							to="/search"
							onClick={clickHandler}
						>
							Search
						</NavLink>
					</li>
					<li>
						<NavLink className="link link--disabled" to="/article">
							singleArticle
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
