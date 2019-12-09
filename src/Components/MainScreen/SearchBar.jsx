import React from 'react';
import PropTypes from 'prop-types';
import '../../Style/SearchBar.css';


class SearchBar extends React.Component {
  KeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onSearchTextChange(event);
    }
  }

  createInput() {
    return (
        <input
          className="search"
          id="search"
          type="text"
          placeholder="O que está procurando ?"
          onKeyPress={(e) => this.KeyPress(e)}
        />
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
