import { useSelector } from 'react-redux';

import css from './App.module.css';

import Section from './section/Section';
import FormContacts from './phonebook/FormContacts';
import ContactsList from './contacts/ContactsList';
import Filter from './filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts.data);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <FormContacts />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </Section>
    </div>
  );
}
