import {
  LOAD_MODEL_LIST,
  LOAD_MODEL_LIST_FULLFILL,
  SELECT_MODEL,
  UPDATE_CANVAS,
  PROCESS_CANVAS,
  LOAD_MODEL,
  LOAD_MODEL_FULLFILL,
  LOAD_MODEL_FAILED,
  PROCESS_CANVAS_FAILED,
  PROCESS_CANVAS_FULLFILL
} from '../actionsTypes';
import { fetchPix2PixModel, transformCanvas } from '../../libs/CanvasProcessor';

const fetchModelList = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: 'edges2cat',
            url: 'models/edges2cats_AtoB.pict'
          },{
            id: 2,
            name: 'pikachu',
            url: 'models/edges2pikachu.pict'
          }
        ]),
      50
    );
  });

export const loadModelList = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_MODEL_LIST });
    fetchModelList().then((modelList) =>
      dispatch({ type: LOAD_MODEL_LIST_FULLFILL, payload: modelList })
    );
  };
};

export const selectModel = (model) => {
  return { type: SELECT_MODEL, payload: model };
};

export const updateCanvas = (canvas) => {
  return { type: UPDATE_CANVAS, payload: canvas };
};

export const processCanvas = (canvas, model) => {
  return (dispatch) => {
    dispatch({ type: PROCESS_CANVAS });

    dispatch({ type: LOAD_MODEL });

    fetchPix2PixModel(model.url)
      .then((loadedModel) => {
        dispatch({ type: LOAD_MODEL_FULLFILL });
        transformCanvas(canvas, loadedModel)
          .then((result) => {
            dispatch({ type: PROCESS_CANVAS_FULLFILL, payload: result.src });
          })
          .catch((error) =>
            dispatch({ type: PROCESS_CANVAS_FAILED, payload: error })
          );
      })
      .catch((error) => dispatch({ type: LOAD_MODEL_FAILED, payload: error }));
  };
};
