import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerIcon from '../../resources/icons/burger-menu.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setTopHeadlinesCountry } from '../../store/actions/topHeadlines';
import { setSourcesCountry } from '../../store/actions/sources';
import { withTranslation } from 'react-i18next';
const Navigation = (props) => {
	const { i18n } = props;
	const [navState, setNavState] = useState(false);
	const isButtonCountryDisabled = useSelector(
		(state) => state.topHeadlinesStore.isButtonCountryDisabled
	);
	/* const isButtonCountryDisabled = useSelector(
		(state) => state.articlesStore.isButtonCountryDisabled
	); */
	const dispatch = useDispatch();
	const buttonRefGB = useRef();
	const buttonRefUS = useRef();
	const buttonRefRS = useRef();
	const clickHandler = () => {
		setNavState(!navState);
	};

	const clickCountryHandler = (event, country) => {
		//console.log('countryCode: ', countryCode);
		buttonRefGB.current.classList.remove('button__country--active');
		buttonRefUS.current.classList.remove('button__country--active');
		buttonRefRS.current.classList.remove('button__country--active');
		event.currentTarget.classList.add('button__country--active');
		setNavState(!navState);

		// do not filter Articles by RS language, just switch translation
		if (country !== 'rs') {
			dispatch(
				setTopHeadlinesCountry({
					country: country,
				})
			);
			dispatch(
				setSourcesCountry({
					country: country,
				})
			);
		}
		let lng = country === 'us' || country === 'gb' ? 'en' : country;
		i18n.changeLanguage(lng);
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
							SelectedArticle
						</NavLink>
					</li>
					<li>
						<NavLink className="link link--disabled" to="/category">
							SelectedCategory
						</NavLink>
					</li>
					<li className="button">
						<button
							className="button__country"
							onClick={(event) =>
								clickCountryHandler(event, 'rs')
							}
							ref={buttonRefRS}
						>
							RS
						</button>
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

export default withTranslation('translations')(Navigation);
