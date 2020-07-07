import {
  SELECT_MODEL,
  LOAD_MODEL_LIST,
  LOAD_MODEL_FULLFILL,
  LOAD_MODEL_FAILED,
  LOAD_MODEL_LIST_FULLFILL,
  LOAD_MODEL_LIST_FAILED,
  UPDATE_CANVAS,
  PROCESS_CANVAS,
  PROCESS_CANVAS_FULLFILL,
  PROCESS_CANVAS_FAILED,
  LOAD_MODEL,
} from '../actionsTypes';

const initialState = {
  selectedModel: null,
  isLoadingModel: false,
  modelLoadingFailedError: null,

  isLoadingModelList: false,
  modelListLoadingFailedError: null,
  modelList: [],

  processedImgURL: {
    isFetching:false,
    error: null,
    url: null
  },

  currCanvas: null,

};

export function modelReducer(state = initialState, action) {
  const {type, payload} = action;
  
  switch (type) {
    case SELECT_MODEL:
      return {
        ...state,
        selectedModel: payload
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

    case LOAD_MODEL:
      return {...state, isLoadingModel:true};

    case LOAD_MODEL_FULLFILL:
      return { ...state, isLoadingModel: false };

    case LOAD_MODEL_FAILED:
      return {
        ...state,
        isLoadingModel: false,
        modelLoadingFailedError: payload.error
      };

    case UPDATE_CANVAS:
      return {
        ...state,
        currCanvas: payload
      }

    case PROCESS_CANVAS:
      return {
        ...state,
        processedImgURL: {
          ...state.processedImgURL,
          isFetching: true
        }
      }

    case PROCESS_CANVAS_FULLFILL:
      return {
        ...state,
        processedImgURL: {
          ...state.processedImgURL,
          isFetching: false,
          url: payload
        }
      }

    case PROCESS_CANVAS_FAILED:
      return {
        ...state,
        processedImgURL: {
          ...state.processedImgURL,
          isFetching: false,
          error: payload
        }
      }

    default:
      return state;
  }
}
