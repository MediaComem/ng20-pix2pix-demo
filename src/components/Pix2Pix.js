import React from "react";

export const Pix2Pix = (props) => {

  // if(!isModelLoaded){
  //   return <div>Model is Loading</div>
  // }

  return (
    <div>
      <div>
        <canvas></canvas>
      </div>
      <div>
        <button onClick={e=>console.log("processing")}>Process</button>
      </div>
      <div></div>
    </div>
  );
};
