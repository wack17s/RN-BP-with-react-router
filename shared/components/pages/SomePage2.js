import React, { Component } from 'react';
import { Link } from 'react-router-native'
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    backgroundColor: 'yellow',
    width: 360,
    
  }
});

export default class Home extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>Some Page 2</Text>

                <Text>-------------------------</Text>

                <Link to='/'>
                    <Text>Go to Home</Text>
                </Link>
                
                <Text>-------------------------</Text>
                
                <Link to='/some1'>
                    <Text>Go to Some Page 1</Text>
                </Link>
            </View>
        );
    }
}
