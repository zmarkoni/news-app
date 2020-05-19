import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; // We use provide to wrap our React APP to connect it with Redux
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './app';

import articles from './store/reducers/articles';
import sources from './store/reducers/sources';

const rootReducer = combineReducers({
	articlesStore: articles,
	sourcesStore: sources,
});

// Create Middleware
const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] next state', store.getState());
			return result;
		};
	};
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('news')
);
