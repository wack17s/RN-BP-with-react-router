import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import Home from '../components/Home.js';
import SomePage1 from '../components/SomePage1.js';
import SomePage2 from '../components/SomePage2.js';

const onEnterHandler = (nextScreenName, lastScreenName) => {
    console.log('1111111111', nextScreenName, lastScreenName)
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="some1" component={SomePage1} title="Login" onEnter={onEnterHandler}/>
    <Scene key="some2" component={SomePage2} title="Register"/>
    <Scene key="home" component={Home} initial/>
  </Scene>
);

export default scenes;
