import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    return (
      <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio </h1>
    );
  }
}
