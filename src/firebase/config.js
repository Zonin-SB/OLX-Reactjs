import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8aE21ky7FVsnI2BWJ4F4YK314e3HwXD8",
  authDomain: "olx-clone-78b40.firebaseapp.com",
  projectId: "olx-clone-78b40",
  storageBucket: "olx-clone-78b40.appspot.com",
  messagingSenderId: "692661094033",
  appId: "1:692661094033:web:2425356249be9b85212130",
  measurementId: "G-L2NC78VRMN"
};
export default firebase.initializeApp(firebaseConfig)