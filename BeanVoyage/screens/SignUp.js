import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { f, auth, database } from '../config/config';

export default class Login extends Component {
    constructor(props) {
        super(props);

        f.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('Logged in');
                console.log(user);
            }
            else {
                console.log('Logged Out');
            }
        })
    }

    async loginWithFacebook() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
            '1110137379193752', // APP_ID
            {
                permissions: ['email', 'public_profile']
            }
        );

        if (type === 'success') {
            const credentials = f.auth.FacebookAuthProvider.credential(token);
            f.auth().signInWithCredential(credentials).catch((error) => {
                console.log('Error Facebook Login');
            })
        }
    }

    registerUser = (email, password) => {
        console.log(email, password);
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => console.log(email, password, user))
            .catch((error) => console.log(error));
    }

    signOut = () => {
        auth.signOut()
            .then(() => {
                alert('Logged out');
            })
            .catch((error) => {
                alert('error');
            });
    }

    render() {
        return (
            <View>
                <TouchableHighlight style={{ backgroundColor: 'green', margin: 10 }} onPress={() => this.registerUser('test@test.com', 'FakePassword')}>
                    <Text style={{ color: 'white' }}> SignUpWithEmail </Text>
                </TouchableHighlight>

                <TouchableHighlight style={{ backgroundColor: 'green', margin: 10 }} onPress={() => this.loginWithFacebook()}>
                    <Text style={{ color: 'white' }}> LoginWithFacebook </Text>
                </TouchableHighlight>

                <TouchableHighlight style={{ backgroundColor: 'green', margin: 10 }} onPress={() => this.signOut()}>
                    <Text style={{ color: 'white' }}> SignOut </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});
