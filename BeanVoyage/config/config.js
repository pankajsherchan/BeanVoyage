import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAjyrX8t_i9wNp-JnLyOf4iwjyrRRoxbxc",
    authDomain: "beanvoyageproject.firebaseapp.com",
    databaseURL: "https://beanvoyageproject.firebaseio.com",
    projectId: "beanvoyageproject",
    storageBucket: "beanvoyageproject.appspot.com",
    messagingSenderId: "1040537095886",
    appId: "1:1040537095886:web:c0af5a5f77742d01"
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