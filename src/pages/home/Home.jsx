import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho-de-compras"
        >
          <FaShoppingCart />
        </Link>
        <form>
          <input value={ value } type="text" onChange={ this.handleInputChange } />
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </>
    );
  }
}
