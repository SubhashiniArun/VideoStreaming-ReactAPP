import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//seed databse

//config

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "hayden-tube",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebase = Firebase.initializeApp(config);

export { firebase }
