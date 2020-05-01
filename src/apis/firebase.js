import * as firebase from 'firebase/app';
  import 'firebase/auth';
  import firebaseConfig from '../configs/firebase';

  firebase.initializeApp(firebaseConfig);

  var provider1 = new firebase.auth.GoogleAuthProvider();
  var provider2 = new firebase.auth.FacebookAuthProvider();

  export function signInWithGoogle(){
      return firebase.auth().signInWithPopup(provider1);
  }

  export function logInWithFacebook(){
    return firebase.auth().signInWithPopup(provider2);
  }

  export function signOut(){
    return firebase.auth().signOut();
  }