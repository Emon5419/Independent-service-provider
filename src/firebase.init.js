// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB1SH1IVjtknkTKu5xtxfFc-165jg663PQ",
   authDomain: "nfsc-writer-club.firebaseapp.com",
   projectId: "nfsc-writer-club",
   storageBucket: "nfsc-writer-club.appspot.com",
   messagingSenderId: "249628315448",
   appId: "1:249628315448:web:26abb58c36506b3a21bbcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;