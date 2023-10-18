import logo from './logo.svg';
import './App.css';
import SignUp from './components/SIgnup';
import { Routes,Route } from 'react-router-dom';
import SignIn from './components/SIgnIn';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/login" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
     </Routes>
    </div>
  );
}

export default App;
