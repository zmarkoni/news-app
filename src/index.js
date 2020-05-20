import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'; // We use provide to wrap our React APP to connect it with Redux
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import './index.scss';
import App from './app';

import topHeadlinesReducer from './store/reducers/topHeadlinesReducer';
import sourcesReducer from './store/reducers/sourcesReducer';

const rootReducer = combineReducers({
	topHeadlinesStore: topHeadlinesReducer,
	sourcesStore: sourcesReducer,
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
	<I18nextProvider i18n={i18n}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</I18nextProvider>,
	document.getElementById('news')
);
