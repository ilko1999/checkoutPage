/* eslint-disable no-param-reassign */
import React, { useState, createContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import data from '../data/data.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [products, setProducts] = useState(
    JSON.parse(window.localStorage.getItem('cardData')) || [],
  );

  const countriesURL =
    'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code';

    let history = useHistory();
    useEffect(() => {
      const storage = JSON.parse(window.localStorage.getItem('cardData'));
    if(storage === null || (Array.isArray(storage) && storage.length < 1)){
      <Redirect to='/nodata'/>
      history.push('/nodata')
      console.log(1);
      return
    }else{
      <Redirect  to='/data'/>
      history.push('/data')
      console.log(22);
      return
    }
    
  }, [history])

  useEffect(() => {
    if (window !== 'undefined') {
      const storage = JSON.parse(window.localStorage.getItem('cardData'));
      if (storage === null || (Array.isArray(storage) && storage.length < 1)) {
        let startCount = Math.floor(Math.random() * data.length + 1);
        let endCount = Math.floor(Math.random() * data.length + 1);
        while (
          startCount === endCount ||
          endCount < 1 ||
          startCount > endCount ||
          startCount < 0
        ) {
          endCount = Math.floor(Math.random() * data.length + 1);
          startCount = Math.floor(Math.random() * data.length + 1);
        }
        const newProducts = data.slice(startCount, endCount);
        setProducts(newProducts);
        window.localStorage.setItem('cardData', JSON.stringify(newProducts));
      }
    }

    fetch(countriesURL)
      .then((response) => response.json())
      .then((values) => setCountryData(values));
  }, []);

  function setProductCount(id, newCount) {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.count = newCount;
        }
        return product;
      }),
    );

    window.localStorage.setItem('cardData', JSON.stringify(products));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        setProductCount,
        countries: countryData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
