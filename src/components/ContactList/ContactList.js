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
            <li key={id}>
              <span>
                {name} - {number}
              </span>
              <button
                className="ContactList__delete-button"
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
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
