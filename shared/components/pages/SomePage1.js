import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Wrapper from '../other/Wrapper.js';

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
<<<<<<< HEAD
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>Some Page 2</Text>
=======
            <Wrapper style='background-color: red;'>
                <Text style={{ fontSize: 18 }}>Some Page 1</Text>
>>>>>>> be9a8ce9a20cb1b2878f59ed68d6987d0c15fba1

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
            </Wrapper>
        );
    }
}
