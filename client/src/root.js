import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import api from './core/api';
import store from './store';
import styles from './scss/styles.scss';

import App from './containers/App';

api.init();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);