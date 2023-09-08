import React, {  useState } from 'react';
import './App.css';


function App() {
  const [myName, setMyName] = useState("Mohi");
 

  const changeName = () => {
   var val = myName;
    (val == "Mohi") ? setMyName("Mohita Khurana"): setMyName("Mohi");
  }

  var myBioData =[
    {
      name:"Mohita",age:31
    },
    {
      name:"gagan" ,age:33
    },
    {
      name:"gagan" ,age:33
    },
    {
      name:"gagan" ,age:33
    },
    {
      name:"gagan" ,age:33
    },
  ]
  const [myArray ,seMyArray] = useState(myBioData);

  const clearAll =()=>{
     seMyArray([]);
  }

  

  return (
    <div className="App">
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>Click me </button>
  
      {
       myArray.map((curEle)=> 
        <h1>name:{curEle.name} & age: {curEle.age}</h1>
        )
      }
      <button onClick={clearAll}>clear </button>
      
    </div>




  );
}

export default App;
