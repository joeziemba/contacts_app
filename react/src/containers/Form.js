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
      companyName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('You did it!')
  }

  render() {

    return(
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <TextField
            fieldName='firstName'
            fieldType='text'
            fieldLabel='First Name:'
            fieldValue={this.state.firstName}
            changeFunction={this.handleChange}
          />
          <TextField
            fieldName='lastName'
            fieldType='text'
            fieldLabel='Last Name:'
            fieldValue={this.state.lastName}
            changeFunction={this.handleChange}
          />
          <TextField
            fieldName='emailAddress'
            fieldType='email'
            fieldLabel='Email:'
            fieldValue={this.state.emailAddress}
            changeFunction={this.handleChange}
          />
          <TextField
            fieldName='phoneNumber'
            fieldType='tel'
            fieldLabel='Phone:'
            fieldValue={this.state.phoneNumber}
            changeFunction={this.handleChange}
          />
          <TextField
            fieldName='companyName'
            fieldType='text'
            fieldLabel='Company:'
            fieldValue={this.state.companyName}
            changeFunction={this.handleChange}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SubmissionForm;
