import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import {Provider} from 'react-redux';

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