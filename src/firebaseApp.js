import firebase from "firebase";
///////////////////////////////////////////////////////////////////////////////////////////////////

const config = {
  apiKey: "AIzaSyA4A5V8i-Zaj6A8aA09Tv9iD2-UsF7pYTg",
  authDomain: "admin-tool-2b980.firebaseapp.com",
  databaseURL: "https://admin-tool-2b980.firebaseio.com",
  projectId: "admin-tool-2b980",
  storageBucket: "admin-tool-2b980.appspot.com",
  messagingSenderId: "803605888361"
};

export const fire = firebase.initializeApp(config);

export const db = fire.database(); 
export const auth = fire.auth();
export const storage = firebase.storage();

export const storageKey = 'roman';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}