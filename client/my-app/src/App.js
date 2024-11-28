import logo from './logo.svg';
import './App.css';
import Alltodos from './componnents/alltodos';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './componnents/Home';
function App() {
  return (
    <div className="App">
      <>
      <div id="navbar"><Link to={'/Home'}>Home</Link></div>
       
      
      <Routes>
      <Route path='/Home' element={<Alltodos/>}/>
      </Routes>
     
      </>
    </div>
  );
}
export default App;
