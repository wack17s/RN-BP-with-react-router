import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './shared/App.js';

export default class test extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('test', () => test);
