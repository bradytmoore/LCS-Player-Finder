import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBbliBV6b3oP8_Qd03UR0ms6TP12oqMmvU",
    authDomain: "lcsapp-74977.firebaseapp.com",
    projectId: "lcsapp-74977",
    storageBucket: "lcsapp-74977.appspot.com",
    messagingSenderId: "79468639132",
    appId: "1:79468639132:web:c0adbf00396c0451c48e59",
    measurementId: "G-TK97PQF6QZ"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);