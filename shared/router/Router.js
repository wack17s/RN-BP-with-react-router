import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Switch, Route, withRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation'

import Home      from '../components/pages/Home.js';
import SomePage1 from '../components/pages/SomePage1.js';
import SomePage2 from '../components/pages/SomePage2.js';

import AnimatedView from './Animation.js';

class Routes extends Component {

	renderPrevPage = (path) => {
		switch (path) {
			case '/':
				return <Home />;
			case '/some1':
				return <SomePage1 />;
			case '/some2':
				return <SomePage2 />;
			default:
				return <Home />;
		}
	}

    render(){
		const { location, history } = this.props;

        return (
            <Navigation>
              <Card
                exact
                path="/"
                render={() => <Link to="/hello">Press it</Link>}
              />
              <Card
                path="/hello"
                render={() => <Text>Hello</Text>}
              />
            </Navigation>
        );
    }
}

const Router = withRouter(Routes);

export default Router;
