import { getDatabase, set, ref } from 'firebase/database'
import './App.css';
import { app } from './firebase';

const db = getDatabase(app);

function App() {



  const putData = () => {
    set(ref(db, 'users/kuldip'), {
      id: 1,
      name: 'kuldip'
    })
  }
  return (
    <div className="App">
      <div>
        Fire Base Basics
      </div>
      <div className="btn">
        <button onClick={putData}>Put Data</button>
      </div>

    </div>
  );
}

export default App;
