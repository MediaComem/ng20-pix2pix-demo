import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadModelList, selectModel } from '../redux/actions/models';

const mapStateToProps = ({ modelReducer }) => {
  return {
    modelList: modelReducer.modelList,
    isLoadingModelList: modelReducer.isLoadingModelList,
    modelListLoadingFailedError: modelReducer.modelListLoadingFailedError,
    selectedModel: modelReducer.selectedModel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadModelList: () => dispatch(loadModelList()),
    selectModel: (id)=> dispatch(selectModel(id))
  };
};

const ConnectedModelList = (props) => {
  const {
    modelList,
    isLoadingModelList,
    modelListLoadingFailedError,
    selectedModel,
    selectModel,
    loadModelList
  } = props;
  useEffect(() => {
    loadModelList();
  }, [loadModelList]);

  if (isLoadingModelList) {
    return <div>loading....</div>;
  }

  if (modelListLoadingFailedError !== null) {
    return <div>Error: {modelListLoadingFailedError}</div>;
  }

  return (
    <ul id={props.id} className={props.className}>
      {modelList.map((model) => (
        <li key={model.id} className={selectedModel?.id === model.id ? 'active' : ''}>
          <button onClick={() => selectModel(model)}>{model.name}</button>
        </li>
      ))}
    </ul>
  );
};

export const ModelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModelList);
