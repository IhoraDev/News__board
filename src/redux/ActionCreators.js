import * as ActionTypes from './ActionTypes';

export const addNews = (ann) => ({
  type: ActionTypes.ADD_NEWS,
  payload: ann,
});

export const editNews = (editedAnn) => ({
  type: ActionTypes.EDIT_NEWS,
  payload: editedAnn,
});

export const deleteNews = (annId) => ({
  type: ActionTypes.DELETE_NEWS,
  payload: annId,
});
