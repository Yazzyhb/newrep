import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAo6TiXzFUX7IZ_pMVp1r0PQw_OeiTppaY",
  authDomain: "todo-week-final.firebaseapp.com",
  projectId: "todo-week-final",
  storageBucket: "todo-week-final.appspot.com",
  messagingSenderId: "241528875644",
  appId: "1:241528875644:web:6be2c2ed7daa339c78b7f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db

}