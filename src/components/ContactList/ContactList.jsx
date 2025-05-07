import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useMemo } from 'react';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const itemsList = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = useMemo(() => {
    return itemsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [itemsList, filter]);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
