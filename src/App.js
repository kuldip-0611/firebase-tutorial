
import './App.css';
import {getFirestore,collection,addDoc,doc,getDoc,query,where, getDocs,updateDoc} from 'firebase/firestore'
// import { useFirebase } from './context/Firebase';
// import { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signOut} from 'firebase/auth';
import { app } from './firebase';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// import { useEffect,useState } from 'react';

// const auth = getAuth(app);


const fireStore = getFirestore(app);

const writeData =async  ()=>{
  const result = await addDoc(collection(fireStore,'cities'),{
    name:'bhavnagar',
    state:'gujarat',
    country:'india'
  })
  console.log(result)
}
const addAnotherData = async ()=>{
  const result = await addDoc(collection(fireStore,'cities/BdGS66ACAC0KsOc2VDiD/food'),{
    food:'gathiya'
  })
  console.log(result)
}
const getDocument = async ()=>{
  const ref =  doc(fireStore,"cities","BdGS66ACAC0KsOc2VDiD")
  const snap = await getDoc(ref)

  console.log(snap.data())
}
const getDocumentOnQuery = async ()=>{
  const ref =   collection(fireStore,"cities")

  const queryy = query(ref,where('state' , '==' ,'gujarat') )

  const result = await getDocs(queryy)

  result.forEach(data => console.log(data.data()))
}
const update = async ()=>{
  const ref = doc(fireStore,"cities","BdGS66ACAC0KsOc2VDiD")
  updateDoc(ref,{
    name:'bhavnagarrr'
  })

  
}
function App() {
  // const [user,setUser] = useState(null);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const firebase = useFirebase()
  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       setUser(user)

  //     }
  //     else{
  //       setUser(null)
  //     }
  //   })
  // })

  
  

  // const signup = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "pandyakuldip2001@gmail.com",
  //     "Kuldip@0611")
  //     .then(value => console.log(value));
  // }

  // if(user === null){
  //  <>
  //    <Signup />
  //    <Signin />
  //  </>
  // }

  return (
    <>
      <button onClick={writeData}>Add Data To fireStore</button>
      <button onClick={addAnotherData} > add another collection </button> 
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentOnQuery}>Get Perticular Query</button>
      <button onClick={update}>Update Doc</button>
    {/* {user ? <h1> {user.email}  <button onClick={()=>signOut(auth)}>Logout</button> </h1> : <Signin />}
    <div className="App">
      <div>
        Fire Base Basics
      </div>
      <div className="btn">
        <button onClick={signup} >Put Data</button>
      </div> */}

      {/* <h1>{user.email}</h1> */}
      
    

    {/* </div> */}
    
    {/* <lable>Name</lable>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <lable>Password</lable>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}  />
    <button onClick={()=>{
       firebase.signUp(email,password) ;
       firebase.putData("users/",email)}}>Submit</button> */}

       
    </>
   
  );
}

export default App;
