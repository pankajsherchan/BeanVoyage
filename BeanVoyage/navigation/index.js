import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { f, auth, database } from '../config/config';
const { width: WIDTH } = Dimensions.get('window');

import CameraScreen from '../screens/CameraScreen';

class Tab1screen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
        <Text>Tab1</Text>
      </View>
    );
  }
}

class Tab2screen extends React.Component {
  openCamera = () => {
    this.props.navigation.navigate("CameraScreen");
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab2</Text>
        <Button title="Take a picture" onPress={this.openCamera}/>
      </View>
    );
  }
}

class Tab3screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab3</Text>
      </View>
    );
  }
}

const screens = createBottomTabNavigator({

  Tab1: { screen: Tab1screen },
  Tab2: { screen: CameraScreen },
  Tab3: { screen: Tab3screen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    // fontFamily: 'Roboto',
    width: WIDTH - 80,
    height: 40,
    borderRadius: 5,
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  }
})

export default createAppContainer(screens);