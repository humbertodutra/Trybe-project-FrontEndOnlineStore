import React, { Component } from 'react';
import propTypes from 'prop-types';
import CartItems from './CartItems/CardItems';

export default class ShoppingCart extends Component {
  cartCheckout = () => {
    const { history: { push } } = this.props;
    push('/checkout');
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.length > 0 ? (
          cart.map((element, index) => <CartItems key={ index } element={ element } />)
        ) : (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio </h1>
        )}
        <button
          data-testid="checkout-products"
          type="submit"
          onClick={ this.cartCheckout }
        >
          FINALIZAR COMPRAS
        </button>
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
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};
