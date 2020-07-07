import React, { useRef, useEffect, useState } from 'react';

const getMousePosFromCanvas = (canvas, e) => {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

const draw = (canvas,e) => {
  const {x,y} = getMousePosFromCanvas(canvas, e);
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(x, y, 1, 0, 2 * Math.PI);
  ctx.stroke()
  // canvas.beginPath();
  // canvas.moveTo(x, mouseY);
  // canvas.lineTo(pX, pY);
  // canvas.stroke();
}

export const DrawingCanvas = props => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currCanvas, setCurrCanvas] = useState(null);
  const CANVAS_SIZE = 512
  const CANVAS = useRef(null)
  
  useEffect(()=>{
    if(!CANVAS.current){
      return;
    }
    setCurrCanvas(CANVAS.current);

  }, [isMouseDown])
  
  return (
    <canvas
      ref={CANVAS}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      onMouseDown={()=>setIsMouseDown(true)}
      onMouseUp={()=>setIsMouseDown(false)}
      onMouseMove={(e) => isMouseDown && currCanvas ? draw(currCanvas,e) : null}
    />
  );
};
