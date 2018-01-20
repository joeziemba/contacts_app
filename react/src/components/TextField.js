// React Imports
import React from 'react';

const TextField = (props) => {

  return(
    <div className='formField'>
      <label htmlFor={props.fieldName}>{props.fieldLabel}</label>
      <input
        type={props.fieldType}
        name={props.fieldName}
        value={props.fieldValue}
        onChange={props.changeFunction}
      />
    </div>
  )
}

export default TextField;
