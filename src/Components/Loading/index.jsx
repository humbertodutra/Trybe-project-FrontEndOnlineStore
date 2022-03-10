import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <h1
        style={ {
          backgroundColor: 'white',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        } }
      >
        Carregando...
      </h1>
    );
  }
}
