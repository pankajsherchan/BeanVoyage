import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput,  } from 'react-native';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { f, auth, database, fbConfigs } from '../config/config';
//import themes from './constants/theme'
const { width: WIDTH } = Dimensions.get('window');
export default class SignUp extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            email: '',
            password:'',
            errorMessage:null,
           }
        //handlesignup method
        var that = this;
        f.auth().onAuthStateChanged(function (user) {
            if (user) {

                that.setState({
                    loggedin: true,
                    email: this.state.email,
                    password:this.state.password,
                   
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
                this.props.navigation.navigate('LogIn')
                
            })
           .catch((error) => {
               let errorCode=error.code
               let errorMessage= error.message
               if(errorCode == 'auth/invalid-email'){
                   this.onValidation.bind(this)('Please enter the valid email address')
               }
               else if(errorCode =='auth/email-already-in-use'){
                this.onValidation.bind(this)('Sorry, the user already exists.')
               }
               else{
               this.onValidation.bind(this)(errorMessage)
               }
     })
            }
    onValidation(errorMessage) {
        this.setState({ error: errorMessage, loading: false })
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
                
                    <FontAwesome 
                    size={28}
                     color='#173F5F'  
                     name="user"
                     style={styles.inputIcon}
                     />
                    <TextInput
                    
                     style={styles.inputtext} 
                     placeholder={'Email'}
                     placeholderTextColor={'#173F5F'}
                     onChangeText={email => this.setState({ email})} 
                     value={this.state.email}
                     UnderlineColorAndroid='transparent' />
                     
                </View>
                <View stye={styles.inputContainer} >
                <FontAwesome 
                    size={28}
                     color='#173F5F'  
                     name="lock"
                     style={styles.inputIcon}
                     />
                    <TextInput 
                        style={styles.inputtext}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'#173F5F'} 
                        UnderlineColorAndroid='transparent' 
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}/>
                        
                </View >
                <View style={styles.buttonContainer}>
                <Text style={{color:'red'}}>{this.state.error}</Text>
                    <TouchableOpacity onPress={() => this.registerUser(this.state.email, this.state.password)}>
                        <LinearGradient colors={['#c6eaf4', '#2BDA8E', '#4c9f50']}
                            style={styles.button}
                            accessibilityLabel="Press">
                                <Text style={styles.text}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                <FontAwesome 
                    size={28}
                     color='#173F5F'  
                     name="facebook-official"
                     style={styles.inputIcon}
                     />
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
        
        paddingLeft: 40,
    },
    btneye:{
        position: 'absolute',
        top: 7,
        paddingLeft: 250,
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
        borderRadius: 20,
        paddingLeft: 50,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: '#030916',
       
        marginHorizontal: 25
    },

});
