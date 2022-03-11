import React from 'react';
import { Switch, Route } from 'react-router';
import ProductDetails from '../Components/ProductDetails';
import Home from '../pages/home/Home';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

export default class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addCart = (param) => {
    this.setState((previous) => ({
      cart: [...previous.cart, param],
    }));
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ () => (<Home
            { ...this.state }
            addCart={ this.addCart }
          />) }
        />
        <Route
          exact
          path="/carrinho-de-compras"
          render={ () => <ShoppingCart { ...this.state } /> }
        />
        <Route exact path="/ProductDetails/:id" component={ ProductDetails } />
        <Route />
        <Route />
      </Switch>
    );
  }
}
