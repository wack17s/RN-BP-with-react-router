import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { StatusBar, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Switch, Route, Redirect, NativeRouter, Link } from 'react-router-native';
import { Navigation, Tabs } from 'react-router-navigation';

import store from './store/configureStore.js';

import Fabric from './components/other/Fabric.js';

// import MainLayout from './components/MainLayout.js';

const PRIMARY_COLOR = 'rgb(226, 68, 68)';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scene: {
        flex: 1,
        padding: 18
    },
    tabs: {
        backgroundColor: PRIMARY_COLOR
    },
    indicator: {
        backgroundColor: 'white'
    },
    button: {
        marginTop: 10
    }
});

export default class App extends Component {
    state = {}

    prepareTabs = (url) => {
        const tabs = [
            {
                path   : `${url}/one`,
                label  : 'One',
                render : () => (
                    <View style={styles.scene}>
                        <Text>One</Text>
                    </View>
                )
            }, {
                path   : `${url}/two`,
                label  : 'Two',
                render : () => (
                    <View style={styles.scene}>
                        <Text>Two</Text>
                    </View>
                )
            }, {
                path   : `${url}/three`,
                label  : 'Three',
                render : () => (
                    <View style={styles.scene}>
                        <Text>Three</Text>
                    </View>
                )
            }
        ];

        return tabs;
    }

    prepareCards = () => {
        const cards = [
            {
                isExact: true,
                path: '/',
                title: 'Index',
                render: () => (
                    <View style={styles.scene}>
                        <Link component={TouchableOpacity} to='/yolo'>
                            <Text>Push a new scene</Text>
                        </Link>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.setState({
                                    navBarStyle: { backgroundColor: PRIMARY_COLOR },
                                    titleStyle: { color: 'white' },
                                    barStyle: 'light-content',
                                    backButtonTintColor: 'white'
                                });
                            }}
                        >
                            <Text>Change navbar style</Text>
                        </TouchableOpacity>
                    </View>
                )
            }, {
                path: '/yolo',
                title: 'Yolo',
                render: () => (
                    <View style={styles.scene}>
                        <Link component={TouchableOpacity} to='/hello'>
                            <Text>Push tabs</Text>
                        </Link>
                    </View>
                )
            }, {
                path: '/hello',
                title: 'Hello',
                render: ({ staticMatch: { url } }) => (
                    <Switch>
                        <Route
                            exact
                            path= {url}
                            render={() => <Redirect to = {`${url}/one`} />}
                        />
                        <Route
                            render={() => (
                                <Tabs
                                    style={styles.container}
                                    tabBarStyle={styles.tabs}
                                    tabBarIndicatorStyle={styles.indicator}
                                >
                                    {Fabric.Tabs(this.prepareTabs.bind(null, url))}
                                </Tabs>
                            )}
                        />
                    </Switch>
                )
            }
        ];

        return cards;
    }

    render() {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <View style={styles.container}>
                        <StatusBar barStyle={this.state.barStyle} />
                        <Navigation
                            navBarStyle={this.state.navBarStyle}
                            titleStyle={this.state.titleStyle}
                            backButtonTintColor={this.state.backButtonTintColor || 'red'}
                        >
                            {Fabric.Cards(this.prepareCards)}
                        </Navigation>
                    </View>
                </NativeRouter>
            </Provider>
        );
    }
}
