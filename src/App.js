import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ProductProvider } from './context/ProductProvider';
import NoDataPage from './pages/NoDataPage';
import PageWithData from './pages/PageWithData';

function App() {
  
  return (
    <Router>
      <ProductProvider>
      {JSON.parse(window.localStorage.getItem('cardData')) === [] ? <h1>Checkout</h1> : null}
        <Route exact path='/nodata' component={NoDataPage}/>
        <Route exact path='/data' component={PageWithData}/>
        <p>created by iliyan</p>
        </ProductProvider>
    </Router>
  );
}

export default App;
