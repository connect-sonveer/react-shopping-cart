import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from './dropdown';
import ProductBox from './product-box';
import { removeItem } from '../actions/cartActions';
import { sortByKey } from '../helpers/utilCommon';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  handleRemove = (id) => {
    this.props.removeItem(id);
    this.setState({
      productList: JSON.parse(localStorage.getItem('cartItems')),
    });
  };

  handleSort = (type) => {
    let initialCart = [].concat(JSON.parse(localStorage.getItem('cartItems')));
    if (type === 'recent') {
      this.setState({
        productList: initialCart,
      });
    } else {
      this.setState({
        productList: sortByKey(this.state.productList, 'price', type),
      });
    }
  };

  render() {
    let addedItems = this.state.productList.length ? (
      this.state.productList.map((item) => {
        const { id, title, size, price, img } = item;
        const desc = item.desc.length > 40 ? item.desc.slice(0, 40) + '...' : item.desc;
        return (
          <ProductBox
            key={id}
            id={id}
            title={title}
            size={size}
            price={price}
            img={img}
            desc={desc}
            handleRemove={this.handleRemove}
            isCart="true"
          />
        );
      })
    ) : (
      <div className="row">Nothing.</div>
    );
    return (
      <div className="container">
        <div className="cart">
          <Dropdown handleSort={this.handleSort} recentDropdown="true" />
          <h5>You have ordered:</h5>
          <div className="row">{addedItems}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
