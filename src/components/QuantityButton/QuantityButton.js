import React, { useContext } from 'react';
import './QuantityButton.css';
import { ProductContext } from '../../context/ProductProvider';
import MyButton from '../MyFields/MyButton/MyButton';

function QuantityButton({ item }) {
  const { setProductCount } = useContext(ProductContext);

  return (
    <div className="Button">
      <MyButton
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
      </MyButton>

      <h4>{item.count}</h4>

      <MyButton
        className="incrementButton"
        disabled={item.count >= item.quantity}
        onClick={() => {
          setProductCount(item.id, item.count + 1);
        }}
      >
        &#43;
      </MyButton>
    </div>
  );
}

export default QuantityButton;
