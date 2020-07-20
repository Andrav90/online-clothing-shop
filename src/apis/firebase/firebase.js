import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../configs/firebase';

export const fire = firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const emailProvider = new firebase.auth.EmailAuthProvider();

export const signInWithGoogle = function() {
    return firebase.auth().signInWithPopup(googleProvider);
};

export const signInWithFacebook = function() {
    return firebase.auth().signInWithPopup(facebookProvider);
};

export const signInWithEmail = function() {
    return firebase.auth().signInWithPopup(emailProvider);
};

export const signOut = function() {
    return firebase.auth().signOut();
};