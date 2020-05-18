import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import 'tachyons';

import App from './containers/app';
import * as serviceWorker from './serviceWorker';
import { searchCats, requestCats } from './reducers'; 

const logger = createLogger();

const rootReducer = combineReducers({ searchCats, requestCats })
const store = 
createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));


// ReactDOM.render(
// 	<React.StrictMode><App /></React.StrictMode>
//   ,document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. 
// serviceWorker.unregister();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
serviceWorker.register();