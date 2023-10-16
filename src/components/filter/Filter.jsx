import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { selectFilter } from 'redux/seleclors';

import css from './Filter.module.css';

export default function FilterContacts() {
  const dispatch = useDispatch();

  const filterChange = evt => {
    const filterValue = evt.currentTarget.value.toLowerCase().trim();
    dispatch(setFilterValue(filterValue));
  };

  return (
    <div className={css.filter}>
      <input
        value={selectFilter}
        onChange={filterChange}
        type="text"
        name="filter"
        className={css.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Find contacts by name"
      />
    </div>
  );
}
