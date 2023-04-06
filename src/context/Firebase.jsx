import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {child, get, getDatabase, ref, set} from 'firebase/database'
const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBoKb-WEY3TKsXQsYBcs8lX8xE-canuBfc",
    authDomain: "first-project-7e25b.firebaseapp.com",
    projectId: "first-project-7e25b",
    storageBucket: "first-project-7e25b.appspot.com",
    messagingSenderId: "965822896527",
    appId: "1:965822896527:web:be4e8778316619ccc793fa",
    databaseURL: "https://first-project-7e25b-default-rtdb.firebaseio.com"
};
const FirebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(FirebaseApp);
const database = getDatabase(FirebaseApp);

export const useFirebase = ()=> useContext(FirebaseContext);
export const FirebaseProvider = (props) => {
    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password);

    }
    const putData = (key,data)=> set(ref(database,key),data)
    get(child(ref(database),'grandfather')).then(data=>console.log(data.val()))


    
  return (
  <FirebaseContext.Provider value={{signUp,putData}}>
    {props.children}
  </FirebaseContext.Provider>)
};
