// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import './App.css';
import { useFirebase } from './context/Firebase';
import { useState } from 'react';
// import { app } from './firebase';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';

// const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase()
  

  // const signup = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "pandyakuldip2001@gmail.com",
  //     "Kuldip@0611")
  //     .then(value => console.log(value));
  // }



  return (
    // <div className="App">
    //   <div>
    //     Fire Base Basics
    //   </div>
    //   <div className="btn">
    //     <button onClick={signup} >Put Data</button>
    //   </div>
    //   <Signup />
    //   <Signin />

    // </div>
    <>
    <lable>Name</lable>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <lable>Password</lable>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}  />
    <button onClick={()=>{
       firebase.signUp(email,password) ;
       firebase.putData("users/",email)}}>Submit</button>
    </>
   
  );
}

export default App;
