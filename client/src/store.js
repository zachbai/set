import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import SetReducer from './reducers/SetReducer';

const loggerMiddleware = createLogger();

const store = createStore(
	SetReducer,
	applyMiddleware(loggerMiddleware)
);

export default store;