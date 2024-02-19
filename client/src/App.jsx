import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
const App=()=> (

  <div className="min-h-screen">
  <div className="gradient-bg-welcome">
    
    <Routes>
      <Route path="/" element={<Home/>}/> 
      {/* <Route path="/efg" element={<Efg/>}/> 
      <Route path="/hij" element={<Hij/>}/> 
      <Route path="/lmn" element={<Lmn/>}/>  */}
    </Routes>
  </div>
  

  
  
</div>
  )


export default App
