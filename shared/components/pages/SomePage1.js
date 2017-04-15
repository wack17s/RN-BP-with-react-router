import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: Dimensions.get('window').width,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center"
    }
});

export default class Home extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>Some Page 2</Text>

                <Text>-------------------------</Text>
                {this.props.children}

                <Link to='/'>
                    <Text>Go to Home</Text>
                </Link>
                
                <Text>-------------------------</Text>
                
                <Link to='/some1/some2'>
                    <Text>Go to nested 2nd page</Text>
                </Link>
                <Link to='/some1/home'>
                    <Text>Go to nested home page</Text>
                </Link>
            </View>
        );
    }
}
