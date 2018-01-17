import React from 'react';

const ContactTile = (props) => {

  return(
    <div>
      {props.firstName}
      {props.lastName}
      {props.email}
      {props.phone}
      {props.company}
    </div>

  )
}

export default ContactTile;
