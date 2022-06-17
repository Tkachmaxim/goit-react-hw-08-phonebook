import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import InputForm from './InputForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    search: '',
  };

  onSubmitForm = ({ name, number }) => {
    if (!this.isPresent(name)) {
      this.setState(
        ({ contacts }) => ({
          contacts: [{ name, number, id: nanoid() }, ...contacts],
        }),
        () => {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
      );
    } else {
      alert(`${name} is present in contacts`);
    }
  };

  isPresent = chekingName => {
    const { contacts } = this.state;
    return contacts.find(
      element =>
        element.name.toLocaleLowerCase() === chekingName.toLocaleLowerCase()
    );
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      search: value,
    });

    console.log(this.state);
  };

  getFilteredContacts = () => {
    const { contacts, search } = this.state;
    const normalizedSearch = search.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedSearch)
    );
    return filteredContacts;
  };

  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem('contacts');
    if (contactsLocalStorage) {
      const jsonContacts = JSON.parse(contactsLocalStorage);
      console.log(jsonContacts);
      this.setState(() => ({
        contacts: [...jsonContacts],
      }));
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onClicktDeleteButton = id => {
    const { contacts } = this.state;
    const notDeletingContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...notDeletingContacts],
    });
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <InputForm onSubmitForm={this.onSubmitForm} />
        <h1>Contacts</h1>
        <Filter
          title="Find contacts by name"
          value={search}
          onChange={this.onChange}
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          onClicktDeleteButton={this.onClicktDeleteButton}
        />
      </div>
    );
  }
}
