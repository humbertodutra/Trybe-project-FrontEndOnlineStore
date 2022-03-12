import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cards extends React.Component {
  render() {
    const { filteredItems: { thumbnail,
      title,
      price,
      id,
      shipping: {
        free_shipping: frete,
      } },
    addCart,
    filteredItems } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{title}</p>
        {frete && <div data-testid="free-shipping">Frete Grátis</div>}
        <p>{price}</p>
        <Link
          to={ `/ProductDetails/${id}` }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="submit"
          onClick={ () => addCart(filteredItems) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Cards.propTypes = {
  filteredItems: propTypes.shape({
    thumbnail: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
    shipping: propTypes.shape({
      free_shipping: propTypes.bool,
    }).isRequired,
  }).isRequired,
  addCart: propTypes.func.isRequired,
};
