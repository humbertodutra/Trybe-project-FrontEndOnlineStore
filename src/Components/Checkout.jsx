import React from 'react';
import propTypes from 'prop-types';

export default class Checkout extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        { cart.map((element, index) => (
          <div key={ index }>
            <img src={ element.thumbnail } alt={ `Imagem de ${element.title}` } />
            <div>
              <p>{element.title}</p>
            </div>
            <p>{element.price}</p>
          </div>
        ))}
        <div>
          { cart.reduce((acc, element) => (
            +element.price + acc
          ), 0) }
        </div>
        <form>
          <input data-testid="checkout-fullname" type="text" placeholder="NOME" />
          <input data-testid="checkout-email" type="email" placeholder="EMAIL" />
          <input data-testid="checkout-cpf" type="text" placeholder="CPF" />
          <input data-testid="checkout-phone" type="text" placeholder="TELEFONE" />
          <input data-testid="checkout-cep" type="text" placeholder="CEP" />
          <input data-testid="checkout-address" type="text" placeholder="ENDEREÇO" />
        </form>
      </div>
    );
  }
}

Checkout.propTypes = { cart: propTypes.arrayOf(propTypes.shape({
  filteredItems: propTypes.shape({
    thumbnail: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }),
})).isRequired,
};
