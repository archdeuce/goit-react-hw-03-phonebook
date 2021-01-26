import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  inputHandler = e => {
    this.props.onFilterChanged(e.target.value);
  };

  render() {
    return (
      <div className="Filter__container">
        <label className="Filter__label" htmlFor="filterId">
          Find contacts by name:
        </label>
        <input
          className="Filter__input"
          id="filterId"
          type="text"
          autoComplete="false"
          onChange={this.inputHandler}
        ></input>
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onFilterChanged: PropTypes.func.isRequired,
};
