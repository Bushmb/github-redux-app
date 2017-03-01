import { createStore } from 'redux';
import * as reducers from './reducers/index';
import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.addRepository('joe'));
console.log(store.getState());

export default createStore(reducers.repositoryReducer);

