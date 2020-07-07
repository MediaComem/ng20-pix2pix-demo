import React, {  } from "react";
import { connect } from 'react-redux';
import { } from '../redux/actions/models';
import { DrawingCanvas } from "./DrawingCanvas";

const mapStateToProps = ({ modelReducer }) => {
  return {
    selectedModel: modelReducer.selectedModel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const Pix2PixConnected = (props) => {
  
  const {selectedModel} = props 
  
  if(!selectedModel){
    return <div>No model selected...</div>
  }
  

  return (
    <div>
      <div><h3>Current Model: {selectedModel.name}</h3></div>
      <div>
        <DrawingCanvas />
      </div>
      <div>
        <button onClick={e=>console.log("processing")}>Process</button>
      </div>
      <div></div>
    </div>
  );
};

export const Pix2Pix = connect(mapStateToProps, mapDispatchToProps)(Pix2PixConnected)