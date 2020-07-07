import {
  LOAD_MODEL_LIST,
  LOAD_MODEL_LIST_FULLFILL,
  SELECT_MODEL
} from '../actionsTypes';

const fetchModelList = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: 'edges2cat'
          }
        ]),
      1000
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

export const selectModel = (id) => {
  return { type: SELECT_MODEL, payload: { id } };
};
