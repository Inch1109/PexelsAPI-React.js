import React from "react";
import { FaSearch } from "react-icons/fa";


export default function Search({search=()=>{},setInput=()=>{}} ) {
 
    const inputHandler = (e)=>{
        setInput(e.target.value)
    }
  return (
    <div className="search">
      <input className="input" type="text" onChange={inputHandler}/>
      <button onClick={search}><FaSearch /></button>
    </div>
  );
}
