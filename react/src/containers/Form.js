// React Imports
import React, { Component } from 'react';

// Component Imports
import TextField from '../components/TextField'

class SubmissionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      companyName: '',
      errors: []
    }
    this.clearForm    = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Custom Methods

  clearForm() {
    this.setState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      companyName: '',
      errors: []
    })
  }

  handleChange(e){
    let key = e.target.name
    let value = e.target.value
    this.setState({
      [key]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let formPayload = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.emailAddress,
      phone: this.state.phoneNumber,
      company: this.state.companyName
    }
    fetch('api/v1/contacts', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => this.processResponse(response))
    .then(body => {
      this.clearForm()
      this.props.getContacts()
    })
    .catch(body => {
      this.setState({
        errors: body.data.errors
      })
    })
  }

  processResponse(response) {
    return new Promise((resolve, reject) => {
      let func;
      response.status < 400 ? func = resolve : func = reject;
      response.json().then(data => func({
        'status': response.status,
        'statusText': response.statusText,
        'data': data
      }));
    });
  }

  // Lifecycle Methods

  render() {
    let formErrors = ''
    if(this.state.errors.length > 0) {
      this.state.errors.forEach((err) => {
        formErrors += `<li>${err}</li>`
      })
    }
    return(
      <div>
      <div className='contact-tile-header'>
        Add New Contact
      </div>
      <div className='cell large-12 contact-tile'>
        <form action='' onSubmit={this.handleSubmit}>
        <div className='grid-x '>
            <div className='cell medium-2'>
              <TextField
                fieldName='firstName'
                fieldType='text'
                fieldLabel='First Name'
                fieldValue={this.state.firstName}
                changeFunction={this.handleChange}
              />
            </div>
            <div className='cell medium-2'>
              <TextField
                fieldName='lastName'
                fieldType='text'
                fieldLabel='Last Name'
                fieldValue={this.state.lastName}
                changeFunction={this.handleChange}
              />
            </div>
            <div className='cell medium-3'>
              <TextField
                fieldName='emailAddress'
                fieldType='email'
                fieldLabel='Email'
                fieldValue={this.state.emailAddress}
                changeFunction={this.handleChange}
              />
            </div>
            <div className='cell medium-2'>
              <TextField
                fieldName='phoneNumber'
                fieldType='tel'
                fieldLabel='Phone'
                fieldValue={this.state.phoneNumber}
                changeFunction={this.handleChange}
              />
            </div>
            <div className='cell medium-2'>
              <TextField
                fieldName='companyName'
                fieldType='text'
                fieldLabel='Company'
                fieldValue={this.state.companyName}
                changeFunction={this.handleChange}
              />
            </div>
            <div className='cell medium-1'>
              <input type='submit' value='Submit' />
            </div>
        </div>
      </form>
      <ul id='form-errors' dangerouslySetInnerHTML={{__html: formErrors}}></ul>
      </div>
    </div>
    )
  }
}

export default SubmissionForm;
