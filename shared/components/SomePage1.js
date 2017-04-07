import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { Actions } from "react-native-router-flux";

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

export default class SomePage1 extends Component {
    showCurrentRoute = () => {
        console.log('this_page', Actions.currentRoute);
    }

  render(){
    return (
      <View style={styles.container}>
        <Text>Some Page 1</Text>
        <Button title='Go to Home' onPress={Actions.home}>Go to Home</Button>
        <Button title='Go to Some Page 2' onPress={Actions.some2}>Go to Some Page 2</Button>
        <Button title='Current route' onPress={this.showCurrentRoute} />
      </View>
    );
  }
}
