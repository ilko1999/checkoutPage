import React from 'react';
import QuantityButton from '../QuantityButton/QuantityButton';
import './Product.css';

function Product({ item }) {
  return (
    <div className="product">
      <div className="product-image leftCol">
        <img src={item.photo} alt="product" />
      </div>
      <div className="rightCol">
        <h2>{item.description}</h2>
        <div className="prices">
          <h3>{item.price}</h3>
          <h6>{item.prevPrice}</h6>
        </div>
        <div className="prodButton">
          <QuantityButton item={item} />
        </div>
      </div>
    </div>
  );
}

export default Product;
