// React Imports
import React, { Component } from 'react';

// Component Imports
import ContactTile from '../components/ContactTile';
import SubmissionForm from './Form';
import ContactFilter from '../components/ContactFilter'

class ContactsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      filterEmail: false,
      sortEmail: false
    }
    this.getContacts = this.getContacts.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  // Custom Methods

  deleteContact(event) {
    event.preventDefault()
    fetch(`/api/v1/contacts/${event.target.id}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => this.getContacts())
  }

  getContacts() {
    fetch('/api/v1/contacts')
    .then(response => response.json())
    .then(body => {
      this.setState({
        contacts: body
      })
    })
  }

  toggleFilter() {
    this.setState({
      filterEmail: !this.state.filterEmail
    })
  }

  toggleSort() {
    this.setState({
      sortEmail: !this.state.sortEmail
    })
  }

  renderContacts() {
    let allContacts = this.state.contacts;

    if(this.state.filterEmail){
      allContacts = allContacts.filter(c => {
        return c.email.includes('.com')
      })
    }
    if(this.state.sortEmail) {
      allContacts = allContacts.sort((a,b) => {
        if(a.email < b.email) return -1
        if(a.email > b.email) return 1
        return 0
      })
    } else {
      allContacts = allContacts.sort((a,b) => {
        if(a.id < b.id) return -1
        if(a.id > b.id) return 1
        return 0
      })
    }

    let output = allContacts.map(c => {
      return(
        <ContactTile
          key={c.id}
          id={c.id}
          firstName={c.first_name}
          lastName={c.last_name}
          email={c.email}
          phone={c.phone}
          company={c.company}
          tileClass='contact-tile'
          deleteContact={this.deleteContact}
        />
      )
    })
    return output
  }

  // Lifecycle Methods

  componentDidMount() {
    this.getContacts()
  }

  render() {
    return(
      <div className='wrapper'>
        <SubmissionForm
          getContacts={this.getContacts}
        />
        <ContactFilter
          filterFunction={this.toggleFilter}
          sortFunction={this.toggleSort}
          filter={this.state.filterEmail}
          sort={this.state.sortEmail}
        />
        <div className='grid-x' id='contact-container'>
          <div className='cell'>
            <ContactTile
              firstName='First Name'
              lastName='Last Name'
              email='Email'
              phone='Phone'
              company='Company'
              tileClass='contact-tile-header'
              deleteContact=''
            />
          </div>
          <div className='cell contact-list'>
            {this.state.contacts.length > 0 ? this.renderContacts() : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ContactsContainer;
