import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBiws4WsghK8Z58WAK8CkP_sTJ30p2S1r0",
    authDomain: "cropchat-2544f.firebaseapp.com",
    databaseURL: "https://cropchat-2544f.firebaseio.com",
    projectId: "cropchat-2544f",
    storageBucket: "cropchat-2544f.appspot.com",
    messagingSenderId: "900218769990"
};
firebase.initializeApp(config);

export default {
    database: firebase.database()
}