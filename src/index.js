import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
// import Card from './card.js';
// import CardList from './cardlist.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// robocats uses export instead of export default and can export multiple variables.
// must destructure the line below (if more variables add here { robocats, ... })

// ReactDOM.render(
// 	<React.StrictMode><App /></React.StrictMode>
//   ,document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. 
// serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();