import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native'
import { NativeRouter, Route, Link , Prompt } from 'react-router-native'

class Form extends React.Component {
  state = {
    isBlocking: false,
    text: '',
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(                            // Animate over time
      this.state.fadeAnim,                      // The animated value to drive
      {
        toValue: 1,                             // Animate to opacity: 1, or fully opaque
      }
    ).start();                                  // Starts the animation
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      isBlocking: false,
      text: '',
    })
  }

  render() {
    const { isBlocking } = this.state

    return (
      <View>
        <Prompt
          when={isBlocking}
          message={location => (
            `Are you sure you want to go to ${location.pathname}`
          )}
        />

        <Text>
          Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </Text>

        <TextInput
          value={this.state.text}
          style={{height: 40, borderWidth: 1, borderColor: 'black'}}
          placeholder="Type here to block transitions!"
          onChangeText={(text) => {
            this.setState({
              isBlocking: text.length > 0,
              text,
            })
          }}
        />

        <TouchableOpacity style={styles.btn} onPress={this.handleClick}>
          <Text>Reset Blocking</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const About = () => (
  <Text style={styles.header}>
    About
  </Text>
)

const Friends = () => (
  <Text style={styles.header}>
    Friends
  </Text>
)


export default class CustomLinkExample extends React.Component {
  state = {
    isBlocking: false,
    text: '',
    fadeAnim: new Animated.Value(0),
    previousChildren: null
  }

  componentDidMount() {
    Animated.timing(                            // Animate over time
      this.state.fadeAnim,                      // The animated value to drive
      {
        toValue: 1,                             // Animate to opacity: 1, or fully opaque
      }
    ).start();                                  // Starts the animation
  }

  componentWillReceiveProps(nextProps) {
    // figure out what to do with the children
    const navigatingToParent = nextProps.atParent && !this.props.atParent
    const animationEnded = this.props.animating && !nextProps.animating

    if (navigatingToParent) {
      // we were rendering, but now we're heading back up to the parent,
      // so we need to save the children (har har) so we can render them
      // while the animation is playing
      this.setState({
        previousChildren: this.props.children
      })
    } else if (animationEnded) {
      // When we're done animating, we can get rid of the old children.
      this.setState({
        previousChildren: null
      })
    }
  }

    render() {
    const { anim, children } = this.props
    const { previousChildren, fadeAnim } = this.state

        return (
          <NativeRouter>
            <View style={styles.container}>
              <View style={styles.nav}>
                <Link
                  to="/"
                  underlayColor='#f0f4f7'
                  style={styles.navItem}>
                    <Text>Home</Text>
                </Link>
                <Link
                  to="/about"
                  underlayColor='#f0f4f7'
                  style={styles.navItem}>
                    <Text>About</Text>
                </Link>
                <Link
                  to="/friends"
                  underlayColor='#f0f4f7'
                  style={styles.navItem} >
                    <Text>Friends</Text>
                </Link>
              </View>

                       <Animated.View style={{
        left: fadeAnim.interpolate({
          inputRange: [ 0, 1 ],
          outputRange: [ 200, 0 ]
        }),
        opacity: fadeAnim.interpolate({
          inputRange: [ 0, 0.75 ],
          outputRange: [ 0, 1 ]
        })
      }}>
      <Route exact path="/" component={Form}/>
      <Route path="/about" component={About}/>
      <Route path="/friends" component={Friends}/>
      </Animated.View>


            </View>
        </NativeRouter>);
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    width: 200,
    backgroundColor: '#E94949',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  }
})
