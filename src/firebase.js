import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlNjUKM1PscU8KubdwIaRnOTJik84aT2g",
    authDomain: "chat-eedbe.firebaseapp.com",
    projectId: "chat-eedbe",
    storageBucket: "chat-eedbe.appspot.com",
    messagingSenderId: "604154388299",
    appId: "1:604154388299:web:59f7666b6901e762c352ce"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();