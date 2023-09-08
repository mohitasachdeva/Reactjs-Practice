import React, { useState } from 'react';

function ChangeBackgroudColor() {
    const[bgColor,changeBG] = useState('');

    const changebgColor = (event) =>{
changeBG(event.target.value);
    }
    return (
        <div>
            <select onChange={changebgColor}>
                <option value={""}>select color</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>
                <option value="skyblue">skyblue</option>
            </select>
            <div style={{ backgroundColor: bgColor, width: '100px', height: '100px' }}></div>
        </div>
    );
}

export default ChangeBackgroudColor;