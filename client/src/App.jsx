import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const App=()=> (

  <div className="min-h-screen">
  <div className="gradient-bg-welcome">
    
    <Routes>
      <Route path="/home" element={<Home/>}/> 
       <Route path="/login" element={<Login/>}/> 
      {/* <Route path="/hij" element={<Hij/>}/> 
      <Route path="/lmn" element={<Lmn/>}/>   */}
    </Routes>
  </div>
  

  
  
</div>
  )


export default App
