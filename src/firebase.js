import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBoKb-WEY3TKsXQsYBcs8lX8xE-canuBfc",
    authDomain: "first-project-7e25b.firebaseapp.com",
    databaseURL: "https://first-project-7e25b-default-rtdb.firebaseio.com",
    projectId: "first-project-7e25b",
    storageBucket: "first-project-7e25b.appspot.com",
    messagingSenderId: "965822896527",
    appId: "1:965822896527:web:be4e8778316619ccc793fa"
  };
export const app = initializeApp(firebaseConfig);