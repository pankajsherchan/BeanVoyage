import React from 'react';
import { Image, View, Text, StyleSheet } from "react-native";
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// import Login from '../screens/LogIn';

//import { theme } from '../constants';

class Tab1screen extends React.Component{
    render() {
        return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab1</Text>
          </View>
        );
    }
}
  class Tab2screen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Tab2</Text>
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
    Tab2: { screen: Tab2screen },
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
      }
})
    
export default createAppContainer(screens);
