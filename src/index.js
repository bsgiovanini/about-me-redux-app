import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import {Provider} from 'react-redux';

import 'jquery';

// import bootstrap
import 'bootstrap-sass/assets/javascripts/bootstrap.js';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App} >	
				<Route component={Home}/>
			</Route>
		</Router>
	</Provider>	
  ,
  document.getElementById('root')
);