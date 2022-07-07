export const ContactList = ({contacts}) => {
   return (
<ul>
   {contacts.map(({id, name, number}) => (
      <li
      key={id}>
      <span>{name}</span>
      <span>{number}</span>
<button type="button">Delete</button>
      </li>)
   )}
</ul>
   );
};