import React from 'react';
import Products from './components/Products/Products';
import { ProductProvider } from './context/ProductProvider';
import Forms from './components/Forms/Forms';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <h1>Checkout</h1>
      <div className="wrapper">
        <Products />
        <Forms />
      </div>
    </ProductProvider>
  );
}

export default App;
