import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import Navigation from './navigation/index';
import { f, auth } from './config/config';
import SignUpScreen from './screens/SignUp';
//import console = require('console');

const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component {

  state = {
    isUserLoggedIn: false
  };

  // constructor(props){
  //   super(props);
  // }

  componentDidMount(){
    f.auth().onAuthStateChanged( (user) => {
      if (user) {
         this.setState({
            isUserLoggedIn: true
          });
      }
    });
  }

  render() {

    console.log("2",this.state.isUserLoggedIn);
  
    if(!this.state.isUserLoggedIn){
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={(require('./assets/logo.png'))}
              />
              <SignUpScreen />
          </View>
        </View>
      );
    } 
    else {
      return (
        <View style={styles.container}>
              <Navigation />
        </View>
      ); 
    }
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logoContainer: {

    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  logo: {
    width: 265,
    height: 250,
    marginBottom: 40,
  },

  button: {
    fontFamily: 'Gill Sans',
    width: WIDTH - 80,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },

  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  }

});
