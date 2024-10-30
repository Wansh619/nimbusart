import React from "react";
import { useEffect, useState } from "react";


const ProgressBarProvider=({
    valueStart,
    valueEnd,
    delay=5,
    children
})=>{
const [value,setValue]= useState(valueStart);
useEffect(() => {
    if (value < valueEnd) {
      const interval = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < valueEnd) {
            return prevValue + 5; 
          } else {
            clearInterval(interval); 
            return prevValue;
          }
        });
      }, delay);

      
      return () => clearInterval(interval);
    }
  }, [value, valueEnd]);
  return children(value);
};



export default ProgressBarProvider;