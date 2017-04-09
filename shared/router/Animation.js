import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { Switch, Route, withRouter } from 'react-router-native';

export default class AnimatedView extends Component {

	state = {
		anim: new Animated.Value(0),
		prevLocation: null,
        animating: false
	}

    componentWillReceiveProps(nextProps) {
		if (nextProps.location !== this.props.location) {
            this.setState({ prevLocation: this.props.location, animating: true }, () =>
                Animated.timing(this.state.anim, {
                    toValue: 1,
                    duration: 350
                }).start(() => this.setState({
                    animating: false,
                    anim: new Animated.Value(0),
                    prevLocation: nextProps.location
                }))
            );
    	}
  	}

    renderStatic = (component) => {
        return (
            <View
                style={{
                    position: 'absolute',
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {component}
            </View>
        );
    }
    
    renderAnimatedOld = (component) => {
        const { anim } = this.state;

        return component
            ? (<Animated.View
                    style={{
                        position: 'absolute',
                        justifyContent: "center",
                        alignItems: "center",
                        right: anim.interpolate({
                            inputRange: [ 0, 1 ],
                            outputRange: [ 0, 150 ]
                        })
                    }}
                >
                    {component}
                </Animated.View>)
            : null;
    }

    renderAnimatedNew = (component) => {
        const { anim } = this.state;

        return component
            ? (<Animated.View
                    style={{
                        position: 'absolute',
                        justifyContent: "center",
                        alignItems: "center",
                        left: anim.interpolate({
                            inputRange: [ 0, 1 ],
                            outputRange: [ Dimensions.get('window').width, 0 ]
                        })
                    }}
                >
                    {component}
                </Animated.View>)
            : null;
    }

    render() {
        const { children, prevPage } = this.props;
        const { prevLocation, animating } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        return (
            <View>
                {animating
                    ? this.renderAnimatedOld(oldChild)
                    : this.renderStatic(oldChild)}

                {animating
                    ? this.renderAnimatedNew(newChild)
                    : null}
            </View>
        );
    }
}
