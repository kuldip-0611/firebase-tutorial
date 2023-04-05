
import './App.css';
// import { useFirebase } from './context/Firebase';
// import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signOut} from 'firebase/auth';
import { app } from './firebase';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useEffect,useState } from 'react';

const auth = getAuth(app);





function App() {
  const [user,setUser] = useState(null);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const firebase = useFirebase()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)

      }
      else{
        setUser(null)
      }
    })
  })

  
  

  const signup = () => {
    createUserWithEmailAndPassword(
      auth,
      "pandyakuldip2001@gmail.com",
      "Kuldip@0611")
      .then(value => console.log(value));
  }

  // if(user === null){
  //  <>
  //    <Signup />
  //    <Signin />
  //  </>
  // }

  return (
    <>
    {user ? <h1> {user.email}  <button onClick={()=>signOut(auth)}>Logout</button> </h1> : <Signin />}
    <div className="App">
      <div>
        Fire Base Basics
      </div>
      <div className="btn">
        <button onClick={signup} >Put Data</button>
      </div>

      {/* <h1>{user.email}</h1> */}
      
    

    </div>
    
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
