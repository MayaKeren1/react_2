import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value =useState(1)[0];
  // const handler =useState(1)[1];
  // console.log(value,handler);
  const [text,setText]=useState('random title');
  const handlerClick=()=>{
    if(text==='rendom title'){
    setText('hello world');
    }else{
      setText('rendom title');
    }
  
  };
  return(
   <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handlerClick}>
        chance title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
