import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
  apiKey: 'AIzaSyDxVdBYtcuK-2KDU50zsRLqVeTyLstEthE',
  authDomain: 'teammc-c396f.firebaseapp.com',
  projectId: 'teammc-c396f',
  storageBucket: 'teammc-c396f.appspot.com',
  messagingSenderId: '213917830920',
  appId: '1:213917830920:web:dbcf3574e627cfabb826bd',
  measurementId: 'G-Z5WRSC0ZQ3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
