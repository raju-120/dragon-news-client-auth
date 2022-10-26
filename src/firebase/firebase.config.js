// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHO88p5ZJ-GtWwTWm6SG4T_QgdBJ2Od4E",
  authDomain: "dragon-news-ec061.firebaseapp.com",
  projectId: "dragon-news-ec061",
  storageBucket: "dragon-news-ec061.appspot.com",
  messagingSenderId: "884128303240",
  appId: "1:884128303240:web:7b5ae467ad386728f8b73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;