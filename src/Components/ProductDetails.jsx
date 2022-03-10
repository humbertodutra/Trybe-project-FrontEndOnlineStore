import React, { Component } from 'react';
import propTypes from 'prop-types';
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
    const { details: { thumbnail, title, price } } = this.state;
    return (
      <>
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <button type="submit">Adicionar ao carrinho</button>
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
};
