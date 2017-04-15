import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-native';
import { Text } from 'react-native';

import Wrapper from '../other/Wrapper.js';

export default class Home extends Component {
    static propTypes = {
        children: PropTypes.object
    }

    render() {
        return (
            <Wrapper style='background-color: red;'>
                <Text style={{ fontSize: 18 }}>Some Page 1</Text>

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
