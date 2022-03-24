import './App.css';
import Data from './Components/Data';
import Navbar from './Components/Navbar';
import FavData from './Components/FavData';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Data/>}></Route>
        <Route path="/favData" element={<FavData/>}></Route>  
        <Route path="*" element={<div><h1>404 Page not found</h1></div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
