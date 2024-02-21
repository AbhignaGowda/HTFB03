import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Upload from './components/Upload'
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

const App=()=> {

  const handleLogin = (userData) => {
    // Your login logic here
    console.log('Login data:', userData);
  };
  return(
    
    <div className="min-h-screen">
  <div className="gradient-bg-welcome">
  <Routes>
  
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
      
      
    </Routes>
    
    
 
  </div>
  

  
  
</div>
  )
};


export default App
