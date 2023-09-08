import React, { useState } from 'react';

function ToggleVisibility() {

     const[content,chnageContent] = useState("toggle me!");

     const changeContent= ()=>{
          var content1 = content;
       (content1 ==="toggle me!")? chnageContent():chnageContent("toggle me!")
     }
  return (
    <div>
      <button onClick={changeContent}>Show/Hide Text</button>
      <p>{content}</p>
    </div>
  );
}
export default ToggleVisibility;