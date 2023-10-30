import { ContactForm } from "components/ContactForm/ContactForm";
import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container, Section } from "./GlobalStyle";
import { FindCont } from "components/FindCont/FindCont";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (newContact) => {
    const {contacts} = this.state
      const newnameToLower = newContact.name.toLocaleLowerCase();
      const checkname = contacts.some(contact => contact.name.toLocaleLowerCase() === newnameToLower)
    if (checkname) {
      alert(`${newContact.name} is already in contacts`)
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {...newContact, id: nanoid()}]
    }))
    }
  changeFilter = (value) => {
    this.setState({
      filter: value
    })
  }
  checkFilter = () => {
    return this.state.contacts.filter(cont => {
      const filterToLower = this.state.filter.toLocaleLowerCase();
      const nameToLower = cont.name.toLocaleLowerCase()
      return nameToLower.includes(filterToLower)
    })
  }
  delContact = (id) => {
    return this.setState(
      this.state.contacts.splice({ id }, 1)
    )
}
  render() {
    const findFilter = this.checkFilter()
    return <Section>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={this.addContact} />
      <Container>
        <h2>Contacts</h2>
        <FindCont onFilter={this.changeFilter} filterValue={this.state.filter} />
        <ContactsList arr={findFilter}  onDell={this.delContact} />
      </Container>
    </Section>
  }
};

