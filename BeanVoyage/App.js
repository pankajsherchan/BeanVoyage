import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import SignUp from './screens/SignUp';
import Navigation from './navigation/index';

const { width: WIDTH } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <Navigation />
    </View>
    );
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
    justifyContent: 'center',

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
    marginTop: 30,




  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  }

});
