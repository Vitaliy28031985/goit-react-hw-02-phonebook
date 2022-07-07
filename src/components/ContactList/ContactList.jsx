import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({contacts, onDeleteContact}) => {
   return (
<ul>
   {contacts.map(({id, name, number}) => (
      <li
      className={s.list}
      key={id}>
      <span className={s.text}>{name}: </span>
      <span>{number}</span>
<button className={s.button} type="button"
 onClick={() => onDeleteContact(id)}>
   Delete</button>
      </li>)
   )}
</ul>
   );
};

ContactList.propTypes = {
   onDeleteContact: PropTypes.func.isRequired,
   contacts: PropTypes.arrayOf(
   PropTypes.shape({
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
}),
),
 }
 