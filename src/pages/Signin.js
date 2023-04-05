import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(value => alert('sign in successfully'))
        .catch(err => alert('error'))


    }
    return (
        <div>
            <h1>Sign In PAGE</h1>
            <lable>Name</lable>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

            <lable>Password</lable>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>Sign IN</button>
        </div>
    )
}

export default Signin
