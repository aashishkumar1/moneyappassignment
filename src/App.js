import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Pagenotfound from './components/Pagenotfound';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
    </>
  );
}

export default App;
