import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import styled from 'styled-components/native';

export default class Wrapper extends Component {

    render(){
        const Wrapper = styled.View`
          background-color: papayawhip;
          width: 100%;
          align-items: center;
          flex: ${this.props.flex || '1'};
          ${this.props.style}
        `;

        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        );
    }
}
