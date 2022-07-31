import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from './getFilteredContacts';
import s from './ContactList.module.css';
import {
  fetchContacts,
  deleteContacts,
} from 'redux/phonebook/phonebookOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const items = useSelector(state => state.phonebook.items);
  const filter = useSelector(state => state.phonebook.filter);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const occuredError = useSelector(state => state.phonebook.error);
  const distpatch = useDispatch();

  const contacts = getFilteredContacts(items, filter);

  useEffect(() => {
    distpatch(fetchContacts());
  }, [distpatch]);

  console.log('here contacts', contacts);

  return (
    <>
      {occuredError && <h1>Error occured</h1>}
      {isLoading && !occuredError ? (
        <h1>Loading...</h1>
      ) : (
        <ul className={s.contactList}>
          {contacts.map(({ name, number, id }) => (
            <li key={id} className={s.contact}>
              {name} : {number}
              <button
                className={s.button}
                id={id}
                type="button"
                onClick={e => {
                  distpatch(deleteContacts(e.target.id));
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
