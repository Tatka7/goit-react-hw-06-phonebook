import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContactsList, selectFilter } from 'redux/seleclors';

import css from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();

  const removeContact = evt => {
    const contactId = evt.currentTarget.id;
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    if (selectContactsList.length > 0) {
      return selectContactsList.filter(({ name }) =>
        name.toLowerCase().includes(selectFilter)
      );
    }
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
