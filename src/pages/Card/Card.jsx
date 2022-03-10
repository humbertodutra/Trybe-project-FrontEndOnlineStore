import React from 'react';
import propTypes from 'prop-types';

export default class Cards extends React.Component {
  render() {
    const { filteredItems: { thumbnail, title, price } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    );
  }
}

Cards.propTypes = {
  filteredItems: propTypes.shape({
    thumbnail: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
  }).isRequired,
};
