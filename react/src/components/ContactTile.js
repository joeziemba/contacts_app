import React from 'react';

const ContactTile = (props) => {
  let deleteButton = () => {
    return(
      <div className='delete-button' id={props.id} onClick={props.deleteContact}>
        Delete
      </div>
    )
  }
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
      <div className='cell medium-2'>
        {props.company}
      </div>
      <div className='cell medium-1 delete'>
        {!props.tileClass.includes('header') ? deleteButton() : 'Delete'}
      </div>
    </div>

  )
}

export default ContactTile;
