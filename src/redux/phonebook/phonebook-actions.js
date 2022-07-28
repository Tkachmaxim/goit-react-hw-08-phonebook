import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', (name, number) => {
  return {
    payload: { name, number, id: nanoid() },
  };
});

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/change_filter');

export { addContact, deleteContact, changeFilter };
