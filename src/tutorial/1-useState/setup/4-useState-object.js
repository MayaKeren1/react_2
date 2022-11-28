import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({
    name:'peter',
    age:'24',
    message:'rendom message',
  });

const [name,setName]=useState('peter')
const [age,setAge]=useState(24)
const [message,setMessage]=useState('rendom message')


  const chanceMessage=()=>{
    // setPerson({...person,message:'hello world'});
    setMessage('hello world');
  };
  
  return (
    <>
       <h3>{name}</h3>
       <h3>{age}</h3>
       <h3>{message}</h3>
       <button className='btn' onClick={chanceMessage}>
        chance message
       </button>
    </>
  );
};

export default UseStateObject;
