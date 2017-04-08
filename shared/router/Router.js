import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Switch, Route, withRouter } from 'react-router-native';

import Home from '../components/pages/Home.js';
import SomePage1 from '../components/pages/SomePage1.js';
import SomePage2 from '../components/pages/SomePage2.js';

import AnimatedView from './Animation.js';

class Routes extends Component {

	state = {
		anim: new Animated.Value(0),
		animating: false
	}

	componentDidMount() {
		Animated.timing(this.state.anim, {
				toValue: 1
      		}).start();
	}

    componentWillUpdate(nextProps) {
		if (nextProps.location !== this.props.location) {
			console.log('wtf')
        	this.setState({ anim: new Animated.Value(0) } , () => Animated.timing(this.state.anim, {
				toValue: 1
      		}).start());
    	}
  	}
    
	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentLocation !== this.state.currentLocation) {
			this.setState({ animating: false });
    	}
	}

	handleCurrentRoute = (pageName, { location }) => {
		console.log('location', location)
		const pages = {
			home: <Home />,
			some1: <SomePage1 />,
			some2: <SomePage2 />
		};

		this.setState({
			currentLocation: location
		});
		
		return pages[pageName];
	}

    render(){
        return (
            <AnimatedView
				anim={this.state.anim}
				animating={this.state.animating}
			>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/some1" component={SomePage1} />
					<Route path="/some2" component={SomePage2} />
				</Switch>
            </AnimatedView>
        );
    }
}

const Router = withRouter(Routes);

export default Router;
