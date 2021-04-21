/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import Product from '../Product/Product';
import { ProductContext } from '../../context/ProductProvider';
import './Products.css';

function Products() {
  const { products } = useContext(ProductContext);
  const totalPrice =
    products &&
    products.reduce((acc, curr) => acc + curr.price * curr.count, 0);
  const totalItems =
    products && products.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="productsContainer">
      {products && products?.length !== 0
        ? products.map((product, index) => (
            <Product item={product} key={index} />
          ))
        : 'no data'}

      <div className="cartInfo">
        <hr />
        <div className="totalItems">
          <h4>Items in the cart</h4>
          <h4>{totalItems}</h4>
        </div>
        <hr />
        <div className="totalPrice">
          <h4>Total</h4>
          <h4>${totalPrice.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}

export default Products;
