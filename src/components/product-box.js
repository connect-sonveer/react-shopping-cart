import React, { Component } from 'react';
import Modal from './modal';

export default class ProductBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleModalShowClick = () => {
    this.setState({
      open: true,
    });
  };

  handleModalCloseClick = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { id, title, size, price, desc, img, cartButtonName } = this.props;
    return (
      <React.Fragment>
        <div key={id}>
          <div className="card card-cascade card-ecommerce wider" style={{ width: '20rem', margin: '20px' }}>
            <div className="view view-cascade overlay">
              <img className="card-img-top" src={img} alt="Card with shoes"></img>
            </div>

            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>{title}</strong>
              </h4>

              <p className="card-text">{desc}</p>
              <p className="float-left">Price: {price}$</p>
              <p className="float-right">Size:{size}</p>
            </div>
            <div className="card-footer">
              {this.props.isCart === 'true' ? (
                <button
                  type="button"
                  className="btn btn-danger btn-sm float-center"
                  onClick={() => {
                    this.props.handleRemove(id);
                  }}
                >
                  <span className="glyphicon glyphicon-plus"></span> Remove
                </button>
              ) : (
                <>
                  {this.props.showQuickView === 'true' ? (
                    <button type="button" className="btn btn-primary" onClick={this.handleModalShowClick}>
                      Quick View
                    </button>
                  ) : (
                    ''
                  )}

                  <button
                    className="btn btn-info float-right"
                    onClick={() => {
                      this.props.handleClick(id);
                    }}
                  >
                    {cartButtonName}
                  </button>
                </>
              )}
            </div>
          </div>
          <Modal
            handleModalCloseClick={this.handleModalCloseClick}
            handleModalShowClick={this.handleModalShowClick}
            open={this.state.open}
            id={id}
          />
        </div>
      </React.Fragment>
    );
  }
}
