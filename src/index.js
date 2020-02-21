import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';

//thunk is used as a middleware for asynchronous actions, like using the Axios library
import thunk from 'redux-thunk';
import phonesReducer from './store/reducers/phonesReducer.js'

const store = createStore(phonesReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
