import React, { Component } from 'react';
import { Camera, Permissions } from 'expo';
import { View, Text } from 'react-native';

import styles from '../components/styles';
import Toolbar from '../components/toolbar';
import Gallery from '../components/gallery';

class CameraScreen extends Component{
    
    camera = null;

    state = {
        captures: [],
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null
    };

    setFlashMode = ( flashMode ) => this.setState({ flashMode });
    setCameraType = ( cameraType ) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });
    
    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () =>{
        const photoData = await this.camera.takePictureAsync();
        this.setState({
            capturing: false,
            captures: [photoData, ...this.state.captures]
        })
    };

    handleLongCapture = async () =>{
        const videoData = await this.camera.recordAsync();
        this.setState({
            capturing: false,
            captures: [videoData, ...this.state.captures]
        })
    };



    async componentDidMount(){
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing } = this.state;

        if( hasCameraPermission === null ){
            return <View />;
        } else if ( hasCameraPermission === false ){
            return <Text>Access to camera has been denied.</Text>
        }

        return(
            <React.Fragment>
                <View>
                    <Camera 
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}    
                    />
                </View>

                {this.state.captures.length > 0 && <Gallery captures={this.state.captures}/>}

                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}    
                />
            </React.Fragment>
        )
    }
}

export default CameraScreen;