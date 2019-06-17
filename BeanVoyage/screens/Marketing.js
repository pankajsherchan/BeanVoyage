import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Marketing extends Component {
    state = {
        isCameraOpened: false
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.state.isCameraOpened
                        ? <Camera />
                        :
                        <Button title="Take a picture" onPress={() => this.setState({ isCameraOpened: true })} />
                }
            </React.Fragment>
        );
    }
}

export default Marketing;