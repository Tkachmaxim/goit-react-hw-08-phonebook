import PropTypes from 'prop-types';
import { useState } from 'react';

import s from './InputForm.module.css';

const InputForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmitForm(name, number);
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
          value={name}
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

InputForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
