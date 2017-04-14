import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { Switch, Route, withRouter } from 'react-router-native';

import Wrapper from '../components/other/Wrapper.js';

export default class AnimatedView extends Component {

	state = {
		anim: new Animated.Value(0),
		prevLocation: null,
        animating: false,
        direction: 'forward'
	}

    componentWillReceiveProps(nextProps) {
		if (nextProps.location !== this.props.location) {
            this.setState({
                prevLocation: this.props.location,
                direction: this.props.history.action === 'PUSH' ? 'forward' : 'backward',
                animating: true
            }, () =>
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
            <Wrapper
                style={{
                    position: 'absolute',
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {component}
            </Wrapper>
        );
    }

    renderAnimatedOld = (component) => {
        const { anim, direction } = this.state;

        return component
            ? (<Animated.View
                style={[
                    {
                        position: 'absolute',
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    direction === 'forward'
                        ? {
                            right: anim.interpolate({
                                inputRange: [ 0, 1 ],
                                outputRange: [ 0, 150 ]
                            })
                        }
                        : {
                            left: anim.interpolate({
                                inputRange: [ 0, 1 ],
                                outputRange: [ 0, 300 ]
                            })
                        }
                ]}
            >
                {component}
            </Animated.View>)
            : null;
    }

    renderAnimatedNew = (component) => {
        const { anim, direction } = this.state;

        return component
            ? (<Animated.View
                style={[
                    {
                        position: 'absolute',
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    direction === 'forward'
                        ? {
                            left: anim.interpolate({
                                inputRange: [ 0, 1 ],
                                outputRange: [ 300, 0 ]
                            })
                        }
                        : {
                            right: anim.interpolate({
                                inputRange: [ 0, 1 ],
                                outputRange: [ 150, 0 ]
                            })
                        }
                ]}
            >
                {component}
            </Animated.View>)
            : null;
    }

    renderForward = () => {
        const { children, prevPage } = this.props;
        const { prevLocation, animating } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        return (
            <Wrapper>
                {animating
                    ? this.renderAnimatedOld(oldChild)
                    : this.renderStatic(oldChild)}

                {animating
                    ? this.renderAnimatedNew(newChild)
                    : null}
            </Wrapper>
        );
    }

    renderBackward = () => {
        const { children, prevPage } = this.props;
        const { prevLocation, animating } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        return (
            <Wrapper>
                {animating
                    ? this.renderAnimatedNew(newChild)
                    : null}

                {animating
                    ? this.renderAnimatedOld(oldChild)
                    : this.renderStatic(oldChild)}
            </Wrapper>
        );
    }

    render() {
        const { children, prevPage } = this.props;
        const { prevLocation, animating, direction } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        return direction === 'forward'
            ? this.renderForward()
            : this.renderBackward()
        ;
    }
}
