import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))

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
      </div>

    </div>
  )
}

export default Signup
