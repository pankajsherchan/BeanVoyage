import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAVS7dtkchK6SjzDr0QcMWHuzcuu-_uT_U",
    authDomain: "beanvoyage-fbd05.firebaseapp.com",
    databaseURL: "https://beanvoyage-fbd05.firebaseio.com",
    projectId: "beanvoyage-fbd05",
    storageBucket: "beanvoyage-fbd05.appspot.com",
    messagingSenderId: "282980160217",
    appId: "1:282980160217:web:dc2f7f4dedb32817"
};

// Initialize Firebase
firebase.initializeApp(config);

export const fbConfigs = {
    APP_ID: '1110137379193752'
}

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();