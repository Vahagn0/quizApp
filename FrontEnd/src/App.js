import './App.css';
import Question from './questionOptions/question';
import Super from './super';
import {Route,Routes} from 'react-router-dom'

function App() {

  return (
    <div className='div'>
      <Routes>
        <Route path='/' element={<Question />} />
        <Route path="/super" element={<Super />} />
      </Routes>
    </div>
  );
}

export default App;
