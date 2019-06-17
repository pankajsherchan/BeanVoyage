import React from 'react';
import { StyleSheet, Dimensions } from "react-native";
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Marketing from '../screens/Marketing';
import Learning from '../screens/Learning';
import DataCollection from '../screens/DataCollection'
const { width: WIDTH } = Dimensions.get('window');

const screens = createBottomTabNavigator({
  Tab1: { screen: Learning },
  Tab2: { screen: Marketing },
  Tab3: { screen: DataCollection }
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
