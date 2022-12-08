import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio'
import Email from './components/Email';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/EmailForm' element={<Email />} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer />
      </Router>
  )
}

export default App;
