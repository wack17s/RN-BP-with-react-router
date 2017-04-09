import React, { Component } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { Switch, Route, withRouter } from 'react-router-native';

export default class AnimatedView extends Component {

    state = {
        prevLocation: null
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({ prevLocation: this.props.location});
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
        const { anim } = this.props;

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
        const { anim } = this.props;

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
        const { prevLocation } = this.state;

        const oldChild = prevLocation ? prevPage(prevLocation.pathname) : children;
        const newChild = prevLocation ?  children : null;

        return (
            <View>
                {prevLocation && newChild
                    ? this.renderAnimatedOld(oldChild)
                    : this.renderStatic(oldChild)}

                {this.renderAnimatedNew(newChild)}
            </View>
        );
    }
}
