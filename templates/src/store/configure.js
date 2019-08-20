import { combineReducers, createStore } from 'redux';
import counterReducer from '../state/counter/reducer';

const rootReducer = combineReducers({ counter: counterReducer });

export default createStore(rootReducer);
