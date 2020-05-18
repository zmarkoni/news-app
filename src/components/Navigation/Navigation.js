import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerIcon from '../../resources/icons/burger-menu.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../../store/actions/articles';

const Navigation = () => {
	const [navState, setNavState] = useState(false);
	const isButtonCountryDisabled = useSelector(
		(state) => state.articlesStore.isButtonCountryDisabled
	);
	/* const isButtonCountryDisabled = useSelector(
		(state) => state.articlesStore.isButtonCountryDisabled
	); */
	const dispatch = useDispatch();
	const buttonRefGB = useRef();
	const buttonRefUS = useRef();
	const clickHandler = () => {
		setNavState(!navState);
	};

	const clickCountryHandler = (event, country) => {
		//console.log('countryCode: ', countryCode);
		buttonRefGB.current.classList.remove('button__country--active');
		buttonRefUS.current.classList.remove('button__country--active');
		event.currentTarget.classList.add('button__country--active');
		dispatch(setCountry(country));
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
					<li className="button">
						<button
							className="button__country"
							disabled={isButtonCountryDisabled}
							onClick={(event) =>
								clickCountryHandler(event, 'us')
							}
							ref={buttonRefUS}
						>
							US
						</button>
					</li>
					<li className="button">
						<button
							className="button__country button__country--active"
							disabled={isButtonCountryDisabled}
							onClick={(event) =>
								clickCountryHandler(event, 'gb')
							}
							ref={buttonRefGB}
						>
							GB
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
