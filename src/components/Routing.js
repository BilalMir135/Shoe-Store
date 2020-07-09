import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ShoeContextProvider from '../context/ShoeContext';
import ShoeDetail from './ShoeDetail';

const Routing = () => {
  return (
    <Router>
      <ShoeContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/nike-shoe/:id' element={<ShoeDetail />} />
        </Routes>
      </ShoeContextProvider>
    </Router>
  );
};

export default Routing;
