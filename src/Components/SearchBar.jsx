import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';


class SearchBar extends React.Component {
  KeyPress(event){
    if (event.key === 'Enter') {
      this.props.onSearchTextChange(event);
    }
  }

  createInput() {
    return (
      <label htmlFor="title" className="title">
            Search:
        <input
          id="title"
          type="text"
          placeholder="O que está procurando ?"
          onKeyPress={(e) => this.KeyPress(e)}
        />
      </label>
    );
  }

  render() {
    return (
      <div className="search-bar">
        {this.createInput()}
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
};
