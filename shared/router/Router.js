import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Switch, Route, withRouter } from 'react-router-native';

import Home      from '../components/pages/Home.js';
import SomePage1 from '../components/pages/SomePage1.js';
import SomePage2 from '../components/pages/SomePage2.js';

import AnimatedView from './Animation.js';

class Routes extends Component {

	state = {
		anim: new Animated.Value(0),
		animating: false
	}

    componentWillReceiveProps(nextProps) {
		if (nextProps.location !== this.props.location) {
        	setTimeout(() => this.setState({ anim: new Animated.Value(0) } , () => Animated.timing(this.state.anim, {
				toValue: 1,
				duration: 350
      		}).start()), 500);
    	}
  	}
    
	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentLocation !== this.state.currentLocation) {
			this.setState({ animating: false });
    	}
	}

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
		const { anim, animating } = this.state;
		const { location } = this.props;

        return (
            <AnimatedView
				anim={anim}
				animating={animating}
				location={location}
				prevPage={this.renderPrevPage}
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
