import React, { useState, useEffect } from 'react';

export default function Square() { 
  const [ sqClick, setSqClick ] = useState([]);
  
  console.time();
  useEffect(() => { console.timeEnd() },[])

  const delay = () => new Promise((resolve, _) => {
    setTimeout(() => resolve(), 500);
  })

  useEffect(() => {
    async function removeLast(currentArray) {
      // base condition  
      if( currentArray.length === 0) 
        return;
      
        let newArray = [...currentArray]
        newArray.pop()
        await delay();
        setSqClick(newArray)
        removeLast(newArray)
    }
    if(sqClick.length === 6) {
      console.log("reached")
      removeLast(sqClick);
    }
  }, [sqClick])

  function handleSqClick(index) {
    if(sqClick.includes(index))
      return;

    setSqClick(sqClick => [...sqClick, index])
  }
  
  return (
    <div style={{ display: "flex", gap: "10px"}}>
      {[...Array(6)].map((item, index) => 
      <SquareBox 
        id={index} 
        bgColor={sqClick.includes(index) ? "green" : "transparent"}
        handleClick={() => handleSqClick(index)} 
      />)}
    </div>
  );
}

function SquareBox({ id, handleClick, bgColor }) {

  const style = {
    border: "1px solid black",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    backgroundColor: bgColor
  }

  function handleOnClick() {
    handleClick()
  }

  return (
    <div onClick={handleOnClick} id={id} style={style}></div>
  )
}