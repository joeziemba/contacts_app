import React, { Component } from 'react';
import ContactTile from '../components/ContactTile';

class ContactsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
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
    getContacts()
  }

  render() {

    return(
      <div>
        YAY
        <ContactTile />
      </div>
    )
  }
}

export default ContactsContainer;
