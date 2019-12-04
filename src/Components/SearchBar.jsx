import React from 'react';


class SearchBar extends React.Component {
  createInput() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="title" className="title">
            Search:
        <input
          id="title"
          type="text"
          placeholder="O que está procurando ?"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  render() {
    console.log(this.props.searchText)
    return (
      <div className="search-bar">
        {this.createInput()}
      </div>
    );
  }
}

export default SearchBar;
