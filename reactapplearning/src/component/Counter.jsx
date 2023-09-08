import React, { useState } from 'react';

function Counter() {

     const [ value , setValue] = useState (0);

      const autoIncreament =() =>{
            setValue(value+1);
      }
    return (
        <div>
            <button onClick={autoIncreament}> increament</button>
            <p> Counter : {value}</p>
        </div>
    );
}

export default Counter;