import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD8NaZ4YHSkD0W7Wk9kM2asxKNMKeH8uuM',
  authDomain: 'hoteltest-5b2cf.firebaseapp.com',
  databaseURL: 'https://hoteltest-5b2cf.firebaseio.com',
  projectId: 'hoteltest-5b2cf',
  storageBucket: 'hoteltest-5b2cf.appspot.com',
  messagingSenderId: '562943101889'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

