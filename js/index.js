require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import RepositoryList from './components/repository-list';

const repositories = [{name: "one"}, {name: "two"}, {name: "three"}];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    	<Provider store={store}>
    		<RepositoryList />
    	</Provider>, 
    	document.getElementById('app'))
);