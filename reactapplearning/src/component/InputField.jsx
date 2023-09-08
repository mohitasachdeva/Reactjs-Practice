import React, { useState } from 'react';

function InputField() {

      const [ value ,setValue] = useState("Todo");
       const chnageValue = (event) => {
            setValue(event.target.value)
       }
  return (
    <div>
      <input onChange={chnageValue} type="text" />
      <p>Input text: {value}</p>
    </div>
  );
}

export default InputField;
