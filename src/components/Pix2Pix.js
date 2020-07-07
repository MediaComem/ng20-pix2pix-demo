import React, {  } from "react";
import { connect } from 'react-redux';
import { updateCanvas, processCanvas } from '../redux/actions/models';
import { DrawingCanvas } from "./DrawingCanvas";

const mapStateToProps = ({ modelReducer }) => {
  return {
    selectedModel: modelReducer.selectedModel,
    currCanvas: modelReducer.currCanvas,
    processedImgURL: modelReducer.processedImgURL
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCanvas: (canvas)=> dispatch(updateCanvas(canvas)),
    processCanvas: (canvas, model) => dispatch(processCanvas(canvas, model))
  };
};

const Pix2PixConnected = (props) => {
  
  const {selectedModel, currCanvas, processedImgURL} = props 
  
  if(!selectedModel){
    return <div>No model selected...</div>
  }
  

  return (
    <div>
      <div><h3>Current Model: {selectedModel.name}</h3></div>
      <div>
        <DrawingCanvas currCanvas={currCanvas} onCanvasDrawingChange={(e)=>props.updateCanvas(e)}/>
      </div>
      <div>
        <button onClick={e=>{
          props.processCanvas(currCanvas, selectedModel);
        }}>Process</button>
      </div>
      <div>
        {processedImgURL.isFetching && "Loading..."}
        {processedImgURL.error && processedImgURL.error}
        {processedImgURL.url && (<img src={processedImgURL.url} alt="processed img" />)}
      </div>
    </div>
  );
};

export const Pix2Pix = connect(mapStateToProps, mapDispatchToProps)(Pix2PixConnected)