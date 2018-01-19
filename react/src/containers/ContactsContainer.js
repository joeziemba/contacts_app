// React Imports
import React, { Component } from 'react';

// Component Imports
import ContactTile from '../components/ContactTile';
import SubmissionForm from './Form';

class ContactsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
    this.getContacts = this.getContacts.bind(this);
  }

  // Custom Methods

  getContacts() {
    fetch('/api/v1/contacts')
    .then(response => response.json())
    .then(body => {
      this.setState({
        contacts: body
      })
    })
  }

  // Lifecycle Methods

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
        <SubmissionForm
          getContacts={this.getContacts}
        />
        {contactList}
      </div>
    )
  }
}

export default ContactsContainer;
