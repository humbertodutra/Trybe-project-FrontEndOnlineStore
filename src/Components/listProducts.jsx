import React from 'react';
import propTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
  }

  handleSelectCategories = async (e) => {
    const { onChangeFunction, apiRequest } = this.props;
    await onChangeFunction(e);
    apiRequest(e);
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        { categories.map((element) => (
          <label
            htmlFor={ element.id }
            key={ element.id }
            data-testid="category"
          >
            <input
              type="radio"
              id={ element.id }
              name="categories"
              value={ element.id }
              onChange={ (e) => this.handleSelectCategories(e) }
            />
            { element.name }
          </label>
        ))}
      </aside>
    );
  }
}

ListProducts.propTypes = {
  onChangeFunction: propTypes.func.isRequired,
  apiRequest: propTypes.func.isRequired,
};
