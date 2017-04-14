import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Wrapper from '../other/Wrapper.js';

export default class Home extends Component {

    render(){
        return (
            <Wrapper style='background-color: grey;'>
                <Text style={{ fontSize: 18 }}>Launch page</Text>

                <Text>-------------------------</Text>

                <Link to='/some1'>
                    <Text>Go to Some Page 1</Text>
                </Link>

                <Text>-------------------------</Text>

                <Link to='/some2'>
                    <Text>Go to Some Page 2</Text>
                </Link>
            </Wrapper>
        );
    }
}
