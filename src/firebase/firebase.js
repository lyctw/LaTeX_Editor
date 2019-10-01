import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCVnRSOWHEHXhkV1Talbves7GsTKY4sXZY",
    authDomain: "image-db-4c022.firebaseapp.com",
    databaseURL: "https://image-db-4c022.firebaseio.com",
    projectId: "image-db-4c022",
    storageBucket: "image-db-4c022.appspot.com",
    messagingSenderId: "638677840151",
    appId: "1:638677840151:web:1db930aaf3695663274752",
    measurementId: "G-ZQYL0HQZSZ"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.storage();

// console.log(database)

export default database;