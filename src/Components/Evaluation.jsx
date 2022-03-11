import React, { Component } from 'react';

export default class Evaluation extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      textEvaluation: '',
      evaluation: '',
      allEvaluations: [],
    };
  }

  componentDidMount() {
    const myLocalStorage = JSON.parse(localStorage.getItem('Evaluations'));
    this.setState({
      allEvaluations: myLocalStorage || [],
    });
  }

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.setState((previous) => ({
      allEvaluations: [...previous.allEvaluations, { ...previous, allEvaluations: null }],
      textEvaluation: '',
    }), () => {
      const { allEvaluations } = this.state;
      localStorage.setItem('Evaluations', JSON.stringify(allEvaluations));
    });
  };

  render() {
    const { email, textEvaluation, allEvaluations } = this.state;
    return (
      <form action="">
        <input
          onChange={ this.onHandleChange }
          data-testid="product-detail-email"
          type="email"
          name="email"
          value={ email }
          id=""
        />
        <textarea
          onChange={ this.onHandleChange }
          data-testid="product-detail-evaluation"
          name="textEvaluation"
          value={ textEvaluation }
          cols="30"
          rows="10"
        />
        <label htmlFor="one">
          <input
            onChange={ this.onHandleChange }
            data-testid="1-rating"
            type="radio"
            name="evaluation"
            value="1"
            id="one"
          />
          1
        </label>
        <label htmlFor="two">
          <input
            onChange={ this.onHandleChange }
            data-testid="2-rating"
            type="radio"
            name="evaluation"
            value="2"
            id="two"
          />
          2
        </label>
        <label htmlFor="three">
          <input
            onChange={ this.onHandleChange }
            data-testid="3-rating"
            type="radio"
            name="evaluation"
            value="3"
            id="three"
          />
          3
        </label>
        <label htmlFor="four">
          <input
            onChange={ this.onHandleChange }
            data-testid="4-rating"
            type="radio"
            name="evaluation"
            value="4"
            id="four"
          />
          4
        </label>
        <label htmlFor="five">
          <input
            onChange={ this.onHandleChange }
            data-testid="5-rating"
            type="radio"
            name="evaluation"
            value="5"
            id="five"
          />
          5
        </label>
        <button
          onClick={ this.onHandleSubmit }
          id="submit-button"
          data-testid="submit-review-btn"
          type="submit"
        >
          Enviar Avaliação

        </button>
        <div>
          {allEvaluations.length < 1
            ? <div>Sem avaliação disponível</div>
            : allEvaluations.map((elemento, index) => (
              <div key={ index }>
                <p>{elemento.email}</p>
                <p>{elemento.textEvaluation}</p>
                <p>{elemento.evaluation}</p>
              </div>
            ))}
        </div>

      </form>
    );
  }
}
