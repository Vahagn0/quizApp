import './App.css';
import Question from './question';
import SignUp from './signUp';
import Super from './super';
import {Route,Routes} from 'react-router-dom'
import LogIn from './logIn';

function App() {

  return (
    <div className='div'>
      <Routes>
        <Route path='/quiz' element={<Question />} />
        <Route path='/' element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/super" element={<Super />} />
      </Routes>
    </div>
  );
}

export default App;
