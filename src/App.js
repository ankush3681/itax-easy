import logo from './logo.svg';
import './App.css';
import SignUp from './components/SIgnup';
import { Routes,Route } from 'react-router-dom';
import SignIn from './components/SIgnIn';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/login" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
     </Routes>
    </div>
  );
}

export default App;
