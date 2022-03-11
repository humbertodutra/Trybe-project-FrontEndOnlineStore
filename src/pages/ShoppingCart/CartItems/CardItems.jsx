import React from 'react';
import propTypes from 'prop-types';

export default class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  shouldIncreasesItems = (number) => this.setState({ amount: number > 0 ? number : 0 });

  render() {
    const { amount } = this.state;
    const { element } = this.props;

    return (
      <div>
        <img src={ element.thumbnail } alt={ `Imagem de ${element.title}` } />
        <p data-testid="shopping-cart-product-name">{element.title}</p>
        <p>{element.price}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => this.shouldIncreasesItems(amount - 1) }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{amount}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.shouldIncreasesItems(amount + 1) }
        >
          +
        </button>
      </div>
    );
  }
}

CartItems.propTypes = {
  element: propTypes.shape({
    thumbnail: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }).isRequired,
};
