import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//seed databse

//config

const config = {
    apiKey: "AIzaSyCD60aNoJLYIpzm4JxyUobXU63NFZ6uY30",
    authDomain: "hayden-tube.firebaseapp.com",
    projectId: "hayden-tube",
    storageBucket: "hayden-tube.appspot.com",
    messagingSenderId: "161588459693",
    appId: "1:161588459693:web:d58dc8e8d69710c8322e24"
};

const firebase = Firebase.initializeApp(config);

export { firebase }