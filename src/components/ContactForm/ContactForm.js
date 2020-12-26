import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onCreate({ id: shortid.generate(), name, number });
  };

  render() {
    return (
      <>
        <form
          className="ContactForm__form"
          action="URL"
          onSubmit={this.submitHandler}
        >
          <label className="ContactForm__label" htmlFor="nameId">
            Name:
          </label>
          <input
            className="ContactForm__input"
            id="nameId"
            name="name"
            type="text"
            onChange={this.changeHandler}
          ></input>
          <label className="ContactForm__label" htmlFor="telId">
            Number:
          </label>
          <input
            className="ContactForm__input"
            id="telId"
            name="number"
            type="tel"
            onChange={this.changeHandler}
          ></input>
          <button className="ContactForm__button" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
