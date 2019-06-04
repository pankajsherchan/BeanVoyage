import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { f, auth, database } from '../config/config';

const { width: WIDTH } = Dimensions.get('window');
export default class SignUp extends React.Component {

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

    registerUser = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => console.log(email, password, user))
            .catch((error) => console.log(error));
    }

    async loginWithFacebook = () => {
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

    render() {
        return (
            <View>

                {/* // add email , password 
                // bind with state variable 
                // cause state variable has to be passed during user registration */}

                <TouchableOpacity onPress={() => this.registerUser('emailtest@gmail.com', 'PasswordTest')}>
                    <LinearGradient colors={['#0AC4BA', '#2BDA8E', '#4c9f50']}
                        style={styles.button}
                        accessibilityLabel="Press">
                        <Text style={styles.text}>Sign up    </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.loginWithFacebook()}>
                    <LinearGradient colors={['#c6eaf4', '#2BDA8E', '#4c9f50']}
                        style={styles.button}
                        accessibilityLabel="Press">
                        <Text style={styles.text}>Connect with Facebook   </Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Add a logout Button 
                Copy the logout functionality from Login.js */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

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