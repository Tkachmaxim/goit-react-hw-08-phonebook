import InputForm from 'components/InputForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const Contacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <InputForm />
      <h1>Contacts</h1>
      <Filter title="Find contacts by name" />
      <ContactList />
    </div>
  );
};

export { Contacts };
