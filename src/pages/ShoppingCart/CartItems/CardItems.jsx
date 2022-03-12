import React from 'react';
import propTypes from 'prop-types';

export default class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      hasDisabled: false,
    };
  }

  shouldIncreasesItems = (number, MAX_VALUE) => {
    const { amount } = this.state;
    this.setState({ amount: number > 0 ? number : 0 },
      () => this.setState({ hasDisabled: amount === MAX_VALUE - 1 }));
  };

  render() {
    const { amount, hasDisabled } = this.state;
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
          disabled={ hasDisabled }
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.shouldIncreasesItems(amount + 1, element.available_quantity) }
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
