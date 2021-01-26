import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = { contacts: [], filter: '' };

  componentDidMount() {
    this.getContacts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts === this.state.contacts) {
      return;
    }

    this.saveContacts();
  }

  getContacts = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (!contacts) return;

    this.setState({
      contacts,
    });
  };

  saveContacts = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  onCreate = newContact => {
    if (this.state.contacts.find(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  onFilterChanged = filter => {
    this.setState({ filter });
  };

  onDelete = removeItemId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== removeItemId),
      };
    });

    this.saveContacts();
  };

  filteredContacts = () => {
    let { contacts, filter } = this.state;
    filter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  render() {
    const contacts = this.filteredContacts();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onCreate={this.onCreate} />

        <h2>Contacts</h2>
        <Filter onFilterChanged={this.onFilterChanged} />
        <ContactList contacts={contacts} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
