import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBuyMuBDGz2avamjLR7Rd51kZfazaQZLD4",
    authDomain: "glympse-of-ai.firebaseapp.com",
    projectId: "glympse-of-ai",
    storageBucket: "glympse-of-ai.appspot.com",
    messagingSenderId: "249851865603",
    appId: "1:249851865603:web:73ad01357295e71d53fc36",
    measurementId: "G-23M0H6DTVR"

};

const app = initializeApp(firebaseConfig);


export const authentication = getAuth(app)