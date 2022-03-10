import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/home/Home';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carrinho-de-compras" component={ ShoppingCart } />
        <Route />
        <Route />
        <Route />
      </Switch>
    );
  }
}
