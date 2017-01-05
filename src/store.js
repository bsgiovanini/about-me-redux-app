import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {fetchText} from './actions/home';

import rootReducer from './reducers/index';


const defaultState = {

	home:{
		aboutmeText: ""
	}
};

const loggerMiddleware = createLogger();

const middlewares =  applyMiddleware (
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
);

const enhancers = compose(
	middlewares,
	window.devToolsExtension? window.devToolsExtension() : f => f	
);

const store = createStore(rootReducer, defaultState, enhancers);

store.dispatch(fetchText());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;