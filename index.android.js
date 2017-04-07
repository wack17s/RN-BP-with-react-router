import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import App from './shared/App.js';

console.log('tttttt', App)

export default class test extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('test', () => test);
