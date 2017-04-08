import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { NativeRouter, AndroidBackButton } from 'react-router-native';

import store from './store/configureStore.js';

import MainLayout from './components/MainLayout.js';

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
                <NativeRouter>
					<AndroidBackButton>
						<MainLayout />
					</AndroidBackButton>
				</NativeRouter>
            </Provider>
		);
	}
}