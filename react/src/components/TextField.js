// React Imports
import React from 'react';

const TextField = (props) => {

  return(
    <div>
      <input
        type={props.fieldType}
        name={props.fieldName}
        value={props.fieldValue}
        onChange={props.changeFunction}
      />
      <label htmlFor={props.fieldName}>{props.fieldLabel}</label>
    </div>
  )
}

export default TextField;
