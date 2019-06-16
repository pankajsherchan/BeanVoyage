import React from 'react';
import { View, Text, StyleSheet, TouchableOpacityWithoutFeedback, Dimensions, } from "react-native";
import { createAppContainer, createBottomTabNavigator,} from 'react-navigation';
import { LinearGradient } from 'expo';
import { f, auth, database,storageRef } from '../config/config';
const { width: WIDTH } = Dimensions.get('window');
import Video from 'expo'
import VideoPlayer from 'expo-video-player'

//import { url } from 'inspector';
export default class Tab1 extends React.Component {
 
//first create a storage reference
//storageRef = storage.refFromURL('gs://beanvoyageproject.appspot.com/videobeanvoyage.mp4')
//sampleVideo = storageRef.getDownloadURL();

handleDownload=() =>{
  storage.refFromURL('gs://beanvoyageproject.appspot.com/videobeanvoyage.mp4').getDownloadURL().then(url=>{
    console.log(url);
  }).catch(error=>(console.log(error)))
  ;
  
}
 render() {
    return (
      <View >
        <VideoPlayer 
         videoProps={{
          shouldPlay: true,
          resizeMode: 'contain',
          source: {
            //uri: this.sampleVideo,
            
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
