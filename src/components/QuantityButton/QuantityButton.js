import React, { useContext } from 'react';
import './QuantityButton.css';
import { ProductContext } from '../../context/ProductProvider';

function QuantityButton({ item }) {
  const { setProductCount } = useContext(ProductContext);

  return (
    <div className="Button">
      <button
        className="decrementButton"
        onClick={() => {
          if (item.count && item.count > 0) {
            setProductCount(item.id, item.count - 1);
          } else {
            setProductCount(item.id, 0);
          }
        }}
      >
        &#45;
      </button>

      <h4>{item.count}</h4>

      <button
        className="incrementButton"
        disabled={item.count >= item.quantity}
        onClick={() => {
          setProductCount(item.id, item.count + 1);
        }}
      >
        &#43;
      </button>
    </div>
  );
}

export default QuantityButton;
