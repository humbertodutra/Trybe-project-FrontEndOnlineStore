import React, { Component } from 'react';
import propTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getProductsById } from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductsById(id).then((details) => this.setState({ details }));
  }

  render() {
    const { details: { thumbnail, title, price }, details } = this.state;
    const { addCart, cart } = this.props;
    return (
      <>
        <Link data-testid="shopping-cart-button" to="/carrinho-de-compras">
          <FaShoppingCart />
          {cart.length}
        </Link>
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="submit"
          onClick={ () => addCart(details) }
        >
          Adicionar ao carrinho

        </button>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
  addCart: propTypes.func.isRequired,
  cart: propTypes.arrayOf(propTypes.shape({
    filteredItems: propTypes.shape({
      thumbnail: propTypes.string,
      title: propTypes.string,
      price: propTypes.number,
      id: propTypes.string,
    }),
  })).isRequired,
};
