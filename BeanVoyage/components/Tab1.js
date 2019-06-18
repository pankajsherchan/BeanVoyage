import React from 'react';
import { View, Text, StyleSheet, TouchableOpacityWithoutFeedback, Dimensions,Button, TouchableOpacity } from "react-native";
import { createAppContainer, createBottomTabNavigator,} from 'react-navigation';
import { LinearGradient } from 'expo';
import { f, auth, database,storageRef,storage, } from '../config/config';
const { width: WIDTH } = Dimensions.get('window');
import {Video} from 'expo'
import VideoPlayer from 'expo-video-player'

export default class Tab1 extends React.Component {
constructor(props){
  super();
  this.state={
videoSource:undefined
  }
}
handleDownload=()=>
{
  ref = storage.refFromURL('gs://beanvoyageproject.appspot.com')
 ref.child('videos/videobeanvoyage.mp4').getDownloadURL().then((url) => {
   console.log(url)})
   .catch(error=>(console.log(error)));
 }
render() {
  return (
      <View >
        <VideoPlayer onLoadStart={this.handleDownload()}
         videoProps={{
          shouldPlay: true,
          resizeMode: 'contain',
          source: {
          uri:this.url
         },
          repeat:false
      }}
        isPortrait={true}
        playFromPositionMillis={0}
        />
      </View>
    );
  }
}
