import React from 'react';

const ContactTile = (props) => {

  return(
    <div className={`grid-x ${props.tileClass}`}>
      <div className='cell medium-2'>
        {props.firstName}
      </div>
      <div className='cell medium-2'>
        {props.lastName}
      </div>
      <div className='cell medium-3'>
        {props.email}
      </div>
      <div className='cell medium-2'>
        {props.phone}
      </div>
      <div className='cell medium-3'>
        {props.company}
      </div>
    </div>

  )
}

export default ContactTile;
