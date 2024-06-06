import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/empresa" element={<Empresa/>} />
        <Route exact path="/contato" element={<Contato/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;