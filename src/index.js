import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import courseReducer from './reducers/courseReducer';
import {Provider} from 'react-redux';

//middleware: 
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import App from './components/App';
import CoursesPage from './components/courses/CoursesPage';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let mountNode = document.getElementById('app');

let routes = (
  <Route path="/" component={App}>
    <Route path="courses" component={CoursesPage} />
  </Route>
);

// creating store
const rootReducer = combineReducers ({courseReducer});
const store = createStore (rootReducer); 

// const initialState = { courses: [] };
// const store = createStore (rootReducer, initialState, applyMiddleware (reduxImmutableStateInvariant ()) ); 


// connecting redux to the app via <Provider store={store}> component
ReactDOM.render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, mountNode
);


