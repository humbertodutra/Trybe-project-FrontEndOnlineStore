import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import propTypes from 'prop-types';
import ListProducts from '../../Components/listProducts';
import Card from '../Card/Card';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import Loading from '../../Components/Loading';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      categories: '',
      filteredItems: [],
      loading: false,
    };
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  gettingFilteredItems = (event) => {
    const { searchBar, categories } = this.state;
    if (event) event.preventDefault();
    this.setState({ loading: true });
    getProductsFromCategoryAndQuery(categories, searchBar).then((filteredItems) => {
      this.setState({ filteredItems: filteredItems.results, loading: false });
    });
  };

  render() {
    const { searchBar, filteredItems, loading } = this.state;
    const { addCart, cartLength } = this.props;
    return (
      <>
        {loading && <Loading />}
        <Link data-testid="shopping-cart-button" to="/carrinho-de-compras">
          <FaShoppingCart />
          <p data-testid="shopping-cart-size">{cartLength}</p>
        </Link>
        <form>
          <input
            name="searchBar"
            data-testid="query-input"
            value={ searchBar }
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
        <ListProducts
          handleInputChange={ this.handleInputChange }
          gettingFilteredItems={ this.gettingFilteredItems }
        />
        {filteredItems.length > 0 ? (
          filteredItems.map((element, index) => (
            <Card key={ index } filteredItems={ element } addCart={ addCart } />
          ))
        ) : (
          <p>Nenhum produto foi encontrado</p>
        )}
      </>
    );
  }
}

Home.propTypes = {
  addCart: propTypes.func.isRequired,
  cartLength: propTypes.number.isRequired,
};
