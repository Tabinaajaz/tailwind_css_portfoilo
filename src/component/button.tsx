
"use client"
import React from "react";


 const ButtonComponent=()=> {
    //button click handler
    const handleclick=()=>{
        alert('Button click!');
    }
    return(
        <button onClick={handleclick}>
          submit  </button>
            
    )
}
export default ButtonComponent;