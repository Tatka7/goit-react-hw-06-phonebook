import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContactsList, selectFilter } from 'redux/seleclors';

import css from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const filter = useSelector(selectFilter);

  const removeContact = evt => {
    const contactId = evt.currentTarget.id;
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  return (
    <ul className={css.list}>
      {filterContacts().map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.data}>
              {name}: {number}
              <button
                type="button"
                className={css.button}
                id={id}
                onClick={removeContact}
              >
                Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
