import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { changeSearchText, searchText } = this.props;
    return (
      <div>
        <div className="input-div">
          <form>
            <input
              className="input-search"
              type="text"
              value={searchText}
              onChange={(e) => changeSearchText(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}


SearchBar.propTypes = {
  changeSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
