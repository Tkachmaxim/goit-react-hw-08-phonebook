import InputForm from './InputForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
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

export default App;
