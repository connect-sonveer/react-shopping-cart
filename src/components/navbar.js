import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    if (localStorage.getItem('cartItems') === null) {
      localStorage.setItem('cartItems', JSON.stringify([]));
    }
    const itemsInCart = JSON.parse(localStorage.getItem('cartItems')).length;
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/cart" className="nav-link">
                Cart [{itemsInCart}]
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Navbar);
