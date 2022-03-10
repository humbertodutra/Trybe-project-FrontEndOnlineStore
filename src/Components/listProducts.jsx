import React from 'react';
import { getCategories } from '../services/api';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
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
            />
            { element.name }
          </label>
        ))}
      </aside>
    );
  }
}
export default ListProducts;
