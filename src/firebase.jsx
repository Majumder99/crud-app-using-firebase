import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUgV_hFl3OcP94DN5c6ICHmzFe7zVvNmg",
  authDomain: "crud-app-67bfe.firebaseapp.com",
  projectId: "crud-app-67bfe",
  storageBucket: "crud-app-67bfe.appspot.com",
  messagingSenderId: "852980797719",
  appId: "1:852980797719:web:35afe7b1ed2a9a59392752",
  measurementId: "G-KL132J7RM9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
