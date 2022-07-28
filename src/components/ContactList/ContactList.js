import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from './getFilteredContacts';
import s from './ContactList.module.css';
import { deleteContact } from 'redux/phonebook/phonebook-actions';

const ContactList = () => {
  const items = useSelector(state => state.phonebook.items);
  const filter = useSelector(state => state.phonebook.filter);
  const distpatch = useDispatch();

  const contacts = getFilteredContacts(items, filter);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.contact}>
          {name} : {number}
          <button
            className={s.button}
            id={id}
            type="button"
            onClick={e => distpatch(deleteContact(e.target.id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
