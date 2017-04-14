import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

import Router from '../router/Router.js';

import Wrapper from './other/Wrapper.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  }
});

export default class MainLayout extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Wrapper>
                    <Text style={{ fontSize: 20 }}>H E A D E R</Text>
                </Wrapper>

                <Wrapper flex={3}>
                    <Router />
                </Wrapper>

                <Wrapper>
                    <Text style={{ fontSize: 20 }}>F O O T E R</Text>
                </Wrapper>
            </View>
        );
    }
}
