import './DrawingCanvas.css'
import React, { useRef, useEffect, useState } from 'react';

const getMousePosFromCanvas = (canvas, e) => {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
};

const clear = (canvas, canvasWidth, canvasHeight) => {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
};

const draw = (canvas, lastMousePos, currMousePos) => {
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(lastMousePos.x, lastMousePos.y);
  ctx.lineTo(currMousePos.x, currMousePos.y);
  ctx.stroke();
};

export const DrawingCanvas = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currCanvas, setCurrCanvas] = useState(null);
  const [currMousePos, setCurrMousePos] = useState({ x: null, y: null });
  const CANVAS_SIZE = 512;
  const CANVAS = useRef(null);

  useEffect(() => {
    if (!CANVAS.current) {
      return;
    }
    setCurrCanvas(CANVAS.current);
  }, []);

  useEffect(() => {
    if (props.currCanvas) {
      setCurrCanvas(props.currCanvas);
      return;
    }
  }, [props.currCanvas]);

  return (
    <div id={props.id} className={`drawingcanvas ${props.className}`}>
      <canvas
        ref={CANVAS}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => {
          setIsMouseDown(false);
          props.onCanvasDrawingChange && props.onCanvasDrawingChange(currCanvas);
        }}
        onMouseMove={(e) => {
          const newMousePos = getMousePosFromCanvas(currCanvas, e);
          if (isMouseDown) {
            draw(currCanvas, currMousePos, newMousePos);
          }
          setCurrMousePos(newMousePos);
        }}
      />
      <button
        onClick={() => {
          clear(currCanvas, CANVAS_SIZE, CANVAS_SIZE);
          props.onCanvasDrawingChange &&
            props.onCanvasDrawingChange(currCanvas);
        }}
      >
        Clear
      </button>
    </div>
  );
};
