import React from "react";
import './styles.scss';
import ProgressBarProvider from "../../utils/ProgressBarProvider";

function interpolateColor(percentage) {
  let r, g, b;

  if (percentage <= 25) {
     
      r = 255; // white
      g = Math.round(255 * (percentage / 25));
      b = 0; // yellow
  } else if (percentage <= 50) {
      
      r = Math.round(255 * (1 - ((percentage - 25) / 50))); // 255 to 0
      g = 255; // yellow
      b = Math.round(255 * ((percentage - 25) / 50)); // 0 to 255
  } else {
     
      r = Math.round(255 * ((percentage - 75) / 25)); // 0 to 255
      g = Math.round(255 * (1 - ((percentage - 75) / 25))); // 255 to 0
      b = 255; // blue
  }

  return `rgb(${r}, ${g}, ${b})`;
}




const ProgressBar= (props)=>{
   const { score, text }=props;
   const percentage= score*10;
   

    return (
      <div className="circular-progress-container">
        <ProgressBarProvider valueStart={0} valueEnd={percentage}>
        {
        (value)=>(
        <div className="circle"
        
        style={{
          background: `conic-gradient(#000 ${100-value}%, ${interpolateColor(100-value)} 0% )`,
          '--dynamic-color': interpolateColor(100-value)

        }}
        >

          <h2 className="number">{value/10}/10</h2>
          <h4 className="label">{text}</h4>
           

          </div>
        )
        
        
        }
          </ProgressBarProvider>




      </div>
    );
}

export default ProgressBar;