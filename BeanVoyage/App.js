import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity,  } from 'react-native';
import Navigation from './navigation/index';
import { Asset, AppLoading, LinearGradient } from 'expo';
import { f, auth, database } from './config/config';
import theme from './constants/theme'
import SignUpScreen from './screens/SignUp';


const { width: WIDTH } = Dimensions.get('window')

const images = [
  require('./assets/logo.png')
]
export default class App extends Component {
state = {
    isUserLoggedIn: false,
    isLoadingComplete: false
  };
componentDidMount() {
    f.auth().onAuthStateChanged((user) => {
      console.log('I am inside component did mount')
      if (user) {
        this.setState({
          isUserLoggedIn: true
        });
      }

      this.setState({
        isLoadingComplete: true
      });
    });
  }

  handleResourceAsync = async () => {
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  updateUserStatus = (value) => {
    console.log('User Login', value);
    this.setState({
      isUserLoggedIn: value
    });
  }

  signOut = () => {
    // auth.signOut()
    //   .then(() => {
    //     // Alert.alert(
    //     //   'Success!',
    //     //   'Logout sucessfully');
    //   })
    //   .catch((error) => {
    //   });

    this.setState({
      isUserLoggedIn: false
    })
  }

  render() {
    if (this.state.isLoadingComplete) {
      if (!this.state.isUserLoggedIn) {
        return (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={(require('./assets/logo.png'))}
              />
              <SignUpScreen updateUserLoginStatus={this.updateUserStatus} />
            </View>
          </View>
        );
      }
      else {
        return (
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => this.signOut()}>
                <LinearGradient colors={['#c6eaf4', '#2BDA8E', '#4c9f50']}
                  style={styles.button}
                  accessibilityLabel="Press">
                  <Text style={styles.text}>Log Out</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <Navigation />
          </View>
        );
      }
    }
    else {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
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
