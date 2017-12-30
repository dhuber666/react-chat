import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCpxRs-XahDntzHleFCEMSbZsqEfS0EV4M",
    authDomain: "chat-react-676c2.firebaseapp.com",
    databaseURL: "https://chat-react-676c2.firebaseio.com",
    projectId: "chat-react-676c2",
    storageBucket: "",
    messagingSenderId: "98066201785"
  };

var fire = firebase.initializeApp(config);
export default fire;