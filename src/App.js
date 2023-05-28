import React from 'react';
import './App.css';
import Homescreen from './screens/HomeScreen';
import { Routes, Route } from "react-router-dom"
import Loginscreen from './Loginscreen';

function App() {
  const user = null;
  return (
    <div className='app'>
       {!user ? (<Loginscreen />) : (
          <Routes>
          <Route exact path="/" element={ <Homescreen/> } />
          
        </Routes>
       
       )}
     

     </div>
  );
}

export default App;
