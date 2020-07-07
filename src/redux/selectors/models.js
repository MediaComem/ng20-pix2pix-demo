export const getModelState = store => store.models;

export const getCurrentModel = store => 
  getModelState(store) ? getModelState(store).selectedModel : null

export const getCurrentCanvas = store => 
  getModelState(store) ? getModelState(store).currCanvas : null

