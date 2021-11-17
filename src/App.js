import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Consulting from './components/pages/Consulting';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Home from './components/pages/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/signUp' exact component={SignUp} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/consulting' exact component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
