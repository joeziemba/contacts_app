// React Imports
import React from 'react';

// Component Imports
import ContactsContainer  from './containers/ContactsContainer'
import SubmissionForm     from './containers/Form'

const App = (props) => {

  return(
    <div>
      <ContactsContainer />
      <SubmissionForm />
    </div>
  )
}

export default App;
