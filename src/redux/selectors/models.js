import stores from "../stores"

export const getModelState = store => store.models;

export const getModelList = store => 
  getModelState(store) ? getModelState(store).modelList : [];

export const getCurrentSelectedModel = store => 
  getModelState(store) ? getModelState(store).selectedModelID : 0
