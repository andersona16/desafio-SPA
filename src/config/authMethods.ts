import firebase from './firebase-config';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

