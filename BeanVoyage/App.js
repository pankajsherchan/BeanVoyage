import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground, TouchableOpacity,Dimensions } from 'react-native';
import { theme } from './constants/theme';
import { LinearGradient } from 'expo';

const {width:WIDTH}= Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
//<ImageBackground source={logo} styles={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={(require('./assets/logo'))}
          />
          <TouchableOpacity>
         <LinearGradient colors={['#0AC4BA', '#2BDA8E', '#4c9f50']}
          style={styles.button}
          accessibilityLabel="Press">
          <Text style={styles.text}>Sign up    </Text>
        </LinearGradient>
         </TouchableOpacity>
         <TouchableOpacity>
        <LinearGradient colors={['#c6eaf4', '#2BDA8E', '#4c9f50']}
          style={styles.button}
          accessibilityLabel="Press">
          <Text style={styles.text}>Connect with Facebook   </Text>
        </LinearGradient>
       </TouchableOpacity>
      
          </View>
      </View>
     // </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer:{
flex:1,
width:null,
height:null,
justifyContent:'center',
alignItems:'center',
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
   width:WIDTH-80, 
   height:40,
   borderRadius: 15,
   justifyContent: 'center',
   alignItems:'center',
   marginTop:30,
   
 

     
  },
  text:{
    backgroundColor: 'transparent',
     fontSize: 15,
     color: '#fff',
  }
  
});
