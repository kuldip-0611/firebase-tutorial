import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))

  }
  const SignInWithGoogle = ()=>{
    signInWithPopup(auth, googleAuth)

  }



  return (
    <div>
      <h1>Sign Up Page</h1>
      <div className='form'>

        <lable>Name</lable>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

        <lable>Password</lable>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

        <button onClick={handleSubmit}>Submit</button>
        <br />
        <button onClick={SignInWithGoogle}>SignInWithGoogle</button>
      </div>

    </div>
  )
}

export default Signup
