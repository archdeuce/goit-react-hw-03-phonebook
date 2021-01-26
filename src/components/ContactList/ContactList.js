import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <div className="ContactList__container">
        <ul className="ContactList__list">
          {contacts.map(({ id, name, number }) => (
            <li key={id} className="ContactList__list_item">
              <button
                className="ContactList__delete_button"
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>

              <span className="ContactList__name">{name}</span>
              <span className="ContactList__dash"> - </span>
              <span className="ContactList__number">{number}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
