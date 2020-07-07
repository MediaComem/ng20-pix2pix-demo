import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadModelList, selectModel } from '../redux/actions/models';

const mapStateToProps = ({ modelReducer }) => {
  return {
    modelList: modelReducer.modelList,
    isLoadingModelList: modelReducer.isLoadingModelList,
    modelListLoadingFailedError: modelReducer.modelListLoadingFailedError,
    selectedModelID: modelReducer.selectedModelID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadModelList: () => dispatch(loadModelList()),
    selectModel: (id)=> dispatch(selectModel(id))
  };
};

const ConnectedModelList = ({
  modelList,
  isLoadingModelList,
  modelListLoadingFailedError,
  selectedModelID,
  selectModel,
  loadModelList
}) => {
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
    <ul>
      {modelList.map((model) => (
        <li key={model.id}>
          {model.name}{' '}
          <button onClick={() => selectModel(model.id)}>select</button>
        </li>
      ))}
    </ul>
  );
};

export const ModelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedModelList);
