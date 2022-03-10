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
    const { handleInputChange, gettingFilteredItems } = this.props;
    await handleInputChange(e);
    gettingFilteredItems();
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
              onChange={ this.handleSelectCategories }
            />
            { element.name }
          </label>
        ))}
      </aside>
    );
  }
}

ListProducts.propTypes = {
  handleInputChange: propTypes.func.isRequired,
  gettingFilteredItems: propTypes.func.isRequired,
};
