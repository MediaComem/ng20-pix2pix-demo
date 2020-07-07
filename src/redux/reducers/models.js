import {
  SELECT_MODEL,
  LOAD_MODEL_LIST,
  LOAD_MODEL_FULLFILL,
  LOAD_MODEL_FAILED,
  LOAD_MODEL_LIST_FULLFILL,
  LOAD_MODEL_LIST_FAILED
} from '../actionsTypes';

const initialState = {
  selectedModelID: 0,
  isLoadingModel: false,
  isLoadingModelList: false,
  modelLoadingFailedError: null,
  modelListLoadingFailedError: null,
  modelList: []
};

export function modelReducer(state = initialState, action) {
  const {type, payload} = action;
  
  switch (type) {
    case SELECT_MODEL:
      return {
        ...state,
        selectedModelID: payload.id
      };

    case LOAD_MODEL_LIST:
      return { ...state, isLoadingModelList: true };

    case LOAD_MODEL_LIST_FULLFILL:
      return { ...state, isLoadingModelList: false, modelList: payload };

    case LOAD_MODEL_LIST_FAILED:
      return {
        ...state,
        isLoadingModelList: false,
        modelListLoadingFailedError: payload.error
      };

    case LOAD_MODEL_FULLFILL:
      return { ...state, isLoadingModel: false };

    case LOAD_MODEL_FAILED:
      return {
        ...state,
        isLoadingModel: false,
        modelLoadingFailedError: payload.error
      };

    default:
      return state;
  }
}
