import React, { Component } from 'react';
import propTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getProductsById } from '../services/api';
import Evaluation from './Evaluation';

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
    const { addCart, cartLength } = this.props;
    return (
      <>
        <Link data-testid="shopping-cart-button" to="/carrinho-de-compras">
          <FaShoppingCart />
          <p data-testid="shopping-cart-size">{cartLength}</p>
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
        <div>
          <Evaluation />
        </div>
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
  cartLength: propTypes.number.isRequired,
};
