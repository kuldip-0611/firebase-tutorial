import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import './App.css';
import { app } from './firebase';
import Signup from './pages/Signup';

const auth = getAuth(app);

function App() {

  const signup = () => {
    createUserWithEmailAndPassword(
      auth,
      "pandyakuldip2001@gmail.com",
      "Kuldip@0611")
      .then(value => console.log(value));
  }



  return (
    <div className="App">
      <div>
        Fire Base Basics
      </div>
      <div className="btn">
        <button onClick={signup} >Put Data</button>
      </div>
      <Signup />

    </div>
  );
}

export default App;
