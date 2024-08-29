import { initialiazeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorege } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzaXpGH0q3TZCVsViE5lIMO6bNAzdwqY8",
  authDomain: "films-app-ca127.firebaseapp.com",
  projectId: "films-app-ca127",
  storageBucket: "films-app-ca127.appspot.com",
  messagingSenderId: "367812687815",
  appId: "1:367812687815:web:bdeba01bc7aa86b6d80be2",
  measurementId: "G-Y9T0KK9XY9",
};

const firebaseApp = initialiazeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorege(firebaseApp);

export { auth, db, storage };
