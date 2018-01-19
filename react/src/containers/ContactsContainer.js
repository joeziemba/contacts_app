// React Imports
import React, { Component } from 'react';

// Component Imports
import ContactTile from '../components/ContactTile';

class ContactsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
    this.getContacts = this.getContacts.bind(this);
  }

  // Custom Functions

  getContacts() {
    fetch('/api/v1/contacts')
    .then(response => response.json())
    .then(body => {
      this.setState({
        contacts: body
      })
    })
  }

  // Lifecycle Functions

  componentDidMount() {
    this.getContacts()
  }

  render() {
    let contactList = this.state.contacts.map(c => {
      return(
        <ContactTile
          key={c.id}
          firstName={c.first_name}
          lastName={c.last_name}
          email={c.email}
          phone={c.phone}
          company={c.company}
        />
      )
    })
    return(
      <div>
        {contactList}
      </div>
    )
  }
}

export default ContactsContainer;
