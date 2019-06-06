import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import { f, auth, database, fbConfigs } from '../config/config';
import Icon from 'react-native-vector-icons/Ionicons'
const { width: WIDTH } = Dimensions.get('window');
export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        }
        var that = this;
        f.auth().onAuthStateChanged(function (user) {
            if (user) {

                that.setState({
                    loggedin: true
                });
                console.log('Logged in');

            }
            else {
                that.setState({
                    loggedin: false
                });
                console.log('Logged Out');
            }
        })
    }


    registerUser = (email, password) => {
        console.log(email, password);
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(email, password, user);
                this.props.updateUserLoginStatus(true);
            })
            .catch((error) => console.log(error));
    }

    loginWithFacebook = () => {
        const { type, token } = Expo.Facebook.logInWithReadPermissionsAsync(
            // fbConfigs.APP_ID,
            '1110137379193752',
            {
                permissions: ['email', 'public_profile']
            }
        );

        if (type === 'success') {
            const credentials = f.auth.FacebookAuthProvider.credential(token);
            f.auth().signInWithCredential(credentials)
                .catch((error) => {
                    alert('Error facebook login', error);
                })
                .then(result => {
                    this.props.updateUserLoginStatus(true);
                });
        }
    }

    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <Icon name={'ion-ios-person-outline'} size={28} color={'rgba(255,0,0,0.3)'} style={styles.inputIcon}></Icon>
                    <TextInput onChangeText={(text) => this.setState({ email: text })} value={this.state.email}
                        style={styles.inputtext} placeholder={'Email'} placeholderTextColor={'#173F5F'} UnderlineColorAndroid='transparent' />
                </View>
                <View stye={styles.inputContainer} >
                    <TextInput onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        style={styles.inputtext} placeholder={'Password'}
                        secureTextEntry={true} placeholderTextColor={'#173F5F'} UnderlineColorAndroid='transparent' />
                </View >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.registerUser(this.state.email, this.state.password)}>
                        <LinearGradient colors={['#c6eaf4', '#2BDA8E', '#4c9f50']}
                            style={styles.button}
                            accessibilityLabel="Press">
                            <Text style={styles.text}>Sign up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.loginWithFacebook()}>
                        <LinearGradient colors={['#c6eaf4', '#2BDA8E', '#4c9f50']}
                            style={styles.button}
                            accessibilityLabel="Press">
                            <Text style={styles.text}>Connect with Facebook   </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    button: {
        // fontFamily: 'Roboto',
        width: WIDTH - 80,
        height: 40,
        borderRadius: 5,
        paddingLeft: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
    inputContainer: {
        marginBottom: 15
    },
    inputtext: {
        width: WIDTH - 80,
        height: 40,
        borderRadius: 50,
        paddingLeft: 50,
        backgroundColor: '#c7d1e5',
        color: '#030916',
        borderRadius: 10,
        marginHorizontal: 25
    },

});