import PropTypes from 'prop-types';

export const ContactList = ({contacts, onDeleteContact}) => {
   return (
<ul>
   {contacts.map(({id, name, number}) => (
      <li
      key={id}>
      <span>{name}</span>
      <span>{number}</span>
<button type="button"
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
 