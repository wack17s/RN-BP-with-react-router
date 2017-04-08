import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

import Router from '../router/Router.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: 'red',
  }
});

export default class MainLayout extends Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>H E A D E R</Text>
                </View>

                <Router />
                
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>F O O T E R</Text>
                </View>
            </View>
        );
    }
}
