import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ListProducts from '../../Components/listProducts';
import Card from '../Card/Card';
import { getProductsFromCategoryAndQuery } from '../../services/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      categorieId: '',
      filteredItems: [],
    };
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleCategoriesSelect = ({ target: { value } }) => {
    this.setState({ categorieId: value });
  }

  gettingFilteredItems = (event) => {
    const { value, categorieId } = this.state;
    event.preventDefault();
    getProductsFromCategoryAndQuery(categorieId, value)
      .then((filteredItems) => this.setState({ filteredItems: filteredItems.results }));
  };

  render() {
    const { value, filteredItems } = this.state;
    return (
      <>
        <Link data-testid="shopping-cart-button" to="/carrinho-de-compras">
          <FaShoppingCart />
        </Link>
        <form>
          <input
            data-testid="query-input"
            value={ value }
            type="text"
            onChange={ this.handleInputChange }
          />
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.gettingFilteredItems }
          >
            Buscar
          </button>
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <ListProducts onChangeFunction={ this.handleCategoriesSelect } />
        {filteredItems.length > 0 ? (
          filteredItems.map((element, index) => (
            <Card key={ index } filteredItems={ element } />
          ))
        ) : (
          <p>Nenhum produto foi encontrado</p>
        )}
      </>
    );
  }
}
