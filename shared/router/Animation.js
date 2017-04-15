import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { Switch, Route, withRouter } from 'react-router-native';

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
                                outputRange: [ 0, Dimensions.get('window').width ]
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
                                outputRange: [ Dimensions.get('window').width, 0 ]
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

    renderAnimation = (direction) => {
        const { children, prevPage } = this.props;
        const { prevLocation, animating } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        if (direction === 'forward') {
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
        } else if (direction === 'backward') {
            return (
                <View>
                    {animating
                        ? this.renderAnimatedNew(newChild)
                        : null}

                    {animating
                        ? this.renderAnimatedOld(oldChild)
                        : this.renderStatic(oldChild)}
                </View>
            );
        }

    }

    render() {
        const { children, prevPage } = this.props;
        const { prevLocation, animating, direction } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        return this.renderAnimation(direction);
    }
}
