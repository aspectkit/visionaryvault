import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact'
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './views/LogInSignUp/LoginPage'
import SignUp from './views/LogInSignUp/SignUp'


function App() {
  return (
    
    <ChakraProvider>
    <div className="App">
      <SignUp/>
      <Router 
        basename={process.env.NODE_ENV === 'development' ? '' : '/trace-martin-rport'}>
        <Navbar />
        <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;