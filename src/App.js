import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/product';
import Cart from './components/cart';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

export default App;
