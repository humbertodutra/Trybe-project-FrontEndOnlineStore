import React, { Component } from 'react';
import propTypes from 'prop-types';
import CartItems from './CartItems/CardItems';

export default class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.length > 0 ? (
          cart.map((element) => <CartItems key={ element.id } element={ element } />)
        ) : (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio </h1>
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: propTypes.arrayOf(propTypes.shape({
    filteredItems: propTypes.shape({
      thumbnail: propTypes.string,
      title: propTypes.string,
      price: propTypes.number,
      id: propTypes.string,
    }),
  })).isRequired,
};
