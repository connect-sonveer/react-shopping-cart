import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import ProductBox from './product-box';
import Dropdown from './dropdown';
import { sortByKey, lookup } from '../helpers/utilCommon';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: this.props.items,
      itemsInCart: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  handleClick = (id) => {
    this.props.addToCart(id);
    let existingCart = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      itemsInCart: JSON.parse(localStorage.getItem('cartItems')),
    });
  };

  handleSort = (type) => {
    this.setState({
      productList: sortByKey(this.state.productList, 'price', type),
    });
  };

  render() {
    let itemList = this.state.productList.map((item) => {
      const { id, title, size, price, img } = item;
      const desc = item.desc.length > 40 ? item.desc.slice(0, 40) + '...' : item.desc;

      let cartButtonName = 'Add to Cart';
      if (lookup(JSON.parse(localStorage.getItem('cartItems')), id) === true) {
        cartButtonName = 'Added';
      }
      return (
        <ProductBox
          key={id}
          id={id}
          title={title}
          size={size}
          price={price}
          img={img}
          desc={desc}
          handleClick={this.handleClick}
          itemsInCart={this.props.itemsInCart}
          cartButtonName={cartButtonName}
          showQuickView="true"
        />
      );
    });
    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <Dropdown handleSort={this.handleSort} />
        <div className="row">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    itemsInCart: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
