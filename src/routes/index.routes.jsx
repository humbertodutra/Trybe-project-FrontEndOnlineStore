import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/home/Home';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route />
        <Route />
        <Route />
      </Switch>
    );
  }
}
