import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9Z5H5BRDG1OnMo8lZ1Lvpje6y0IlJjRw',
  authDomain: 'desafiospa-47bb4.firebaseapp.com',
  projectId: 'desafiospa-47bb4',
  storageBucket: 'desafiospa-47bb4.appspot.com',
  messagingSenderId: '403262353630',
  appId: '1:403262353630:web:b52f1bf8e20fd448a6524f',
  measurementId: 'G-5J6MSLRTT7',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default firebase;
