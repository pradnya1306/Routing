// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Component/About'
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </>
  );
}

export default App;
