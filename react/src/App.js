// React Imports
import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

// Component Imports
import ContactsContainer from './containers/ContactsContainer'

const App = (props) => {

  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/contacts' component={ContactsContainer} />
      </Router>
    </div>
  )
}

export default App;
