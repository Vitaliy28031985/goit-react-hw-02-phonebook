import React from "react";

import {ContactList} from 'components/ContactList/ContactList';
import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  

  render() {
  const contactsLs = this.state.contacts;
  const filter = this.state.filter;

  return (
   <>
   <p>Phonebook</p>
<ContactForm/>
   <p>Contacts</p>
   <Filter value={filter}/>
   <ContactList contacts={contactsLs}/>
   </>
  );
}
};
