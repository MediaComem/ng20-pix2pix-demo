import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    modelList: state.modelList,
    isLoadingModelList: state.isLoadingModelList,
    modelListLoadingFailedError: state.modelListLoadingFailedError,
    selectedModelID: state.selectedModelID
  };
};

const ConnectedModelList = ({
  modelList,
  isLoadingModelList,
  modelListLoadingFailedError,
  selectedModelID
}) => {
  if (isLoadingModelList) {
    return <div>loading....</div>;
  }

  if (modelListLoadingFailedError !== null) {
    return <div>Error: {modelListLoadingFailedError}</div>;
  }

  return (
    <ul>
      {modelList.map((model) => (
        <li key={model.id}>
          {model.title}{' '}
          <button onClick={() => console.log(model)}>select</button>
        </li>
      ))}
    </ul>
  );
};

export const ModelList = connect(mapStateToProps)(ConnectedModelList);
