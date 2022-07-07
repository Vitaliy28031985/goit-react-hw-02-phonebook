import React from "react";
import shortid from 'shortid';


export class ContactForm extends React.Component {
state = {
name: '',
number: '',
   }

nameInputId = shortid.generate();
numberInpitId = shortid.generate();

handleChange = e => {
   const {name, value,} = e.currentTarget;
   this.setState({[name]: value});
}

handleSubmit = e => {
const {name, number} = this.state;
e.preventDefault();
this.props.onSubmit(name, number);
this.setState({
   name: '',
   number: ''
 })
}

   render() {
     return (
      <>
      <form
      onSubmit={this.handleSubmit}>
        <label 
        htmlFor={this.nameInputId}>Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?        [a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and         spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
          id={this.nameInputId}
        />
         </label> 
         <label
         htmlFor={this.numberInputId}>Number 
         <input
         type="tel"
         name="number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain spaces,        dashes, parentheses and can start with +"
         required
         onChange={this.handleChange}
         value={this.state.number}
         id={this.numberInputId}       />
         </label>
         <button
          className='button'
          type="submit">
          Add contact
        </button>
      </form>
      </>
     )
   }
}