import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onClicktDeleteButton }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.contact}>
          {name} : {number}
          <button
            className={s.button}
            id={id}
            type="button"
            onClick={e => {
              onClicktDeleteButton(e.target.id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClicktDeleteButton: PropTypes.func.isRequired,
};
