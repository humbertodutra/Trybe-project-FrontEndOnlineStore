import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">
          { cart.length }
        </p>
        {cart.length > 0 ? (
          cart.map((element, index) => (
            <div key={ index }>
              <img src={ element.thumbnail } alt={ `Imagem de ${element.title}` } />
              <p data-testid="shopping-cart-product-name">{element.title}</p>
              <p>{element.price}</p>
            </div>
          ))
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
