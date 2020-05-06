import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { lookup } from '../helpers/utilCommon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProductBox from './product-box';

export class modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: this.props.items,
      itemsInCart: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  handleClick = (id) => {
    this.props.addToCart(id);
    this.setState({
      itemsInCart: JSON.parse(localStorage.getItem('cartItems')),
    });
  };

  render() {
    const { id } = this.props;

    let filteredElement = this.state.productList.filter((element) => {
      return element.id === id;
    });

    let cartButtonName = 'Add to Cart';
    if (lookup(this.state.itemsInCart, id) === true) {
      cartButtonName = 'Added';
    }

    return (
      <div>
        <Dialog open={this.props.open} onClose={this.props.handleModalCloseClick} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Product Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <ProductBox
                key={id}
                id={id}
                title={filteredElement[0].title}
                size={filteredElement[0].size}
                price={filteredElement[0].price}
                img={filteredElement[0].img}
                desc={filteredElement[0].desc}
                handleClick={this.handleClick}
                itemsInCart={this.props.itemsInCart}
                cartButtonName={cartButtonName}
                showQuickView="false"
              />
              <Button autoFocus onClick={this.props.handleModalCloseClick} color="primary">
                Cancel
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(modal);
