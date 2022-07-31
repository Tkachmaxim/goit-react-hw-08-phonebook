import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/phonebook/phonebookOperations';

import s from './InputForm.module.css';

const InputForm = () => {
  const [nameForm, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.phonebook.items);
  const dispatch = useDispatch();

  const onChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === nameForm.toLocaleLowerCase()
      )
    ) {
      return alert('This name is present');
    }
    const newContact = { name: nameForm, number: number };
    dispatch(addContacts(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitHandler} className={s.form}>
      <label>
        Name
        <input
          className={s.input}
          onChange={onChangeForm}
          type="text"
          name="name"
          value={nameForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          className={s.input}
          onChange={onChangeForm}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default InputForm;
