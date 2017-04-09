import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: Dimensions.get('window').width,
        backgroundColor: 'gray',
        justifyContent: "center",
        alignItems: "center"
    }
});

export default class Home extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>Launch page</Text>

                <Text>-------------------------</Text>

                <Link to='/some1'>
                    <Text>Go to Some Page 1</Text>
                </Link>

                <Text>-------------------------</Text>
                
                <Link to='/some2'>
                    <Text>Go to Some Page 2</Text>
                </Link>
            </View>
        );
    }
}
