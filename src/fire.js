import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBp8mVoKCUUNvYGB55xAklPL21kpVRSj6A",
  authDomain: "fir-test-819f6.firebaseapp.com",
  databaseURL: "https://fir-test-819f6.firebaseio.com",
  projectId: "fir-test-819f6",
  storageBucket: "fir-test-819f6.appspot.com",
  messagingSenderId: "331313780864"
};

const fire = firebase.initializeApp(config);

export default fire;
