import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'posts/loadComments';
const ADD_COMMENT = 'posts/addComment';
const EDIT_COMMENT = 'posts/editComments';
const DELETE_COMMENT = 'posts/deletComment';

export const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments
  };
};

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  };
};

export const editComment = (comment) => {
  return {
      type: EDIT_COMMENT,
      comment
  };
};

export const deleteComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment
  };
};

export const fetchComments = () => async (dispatch) => {
  const response = await csrfFetch('/api/comments');
  if (response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments));
    return comments;
  }
};

export const writeComment = (payload) => async dispatch => {

  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(addComment(comment));
    return comment;
  }
};

export const updateComment = (payload) => async dispatch => {
  console.log('--------------Payload Id: ', payload.id, '----------------');
  const response = await csrfFetch(`/api/comments/${payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
  })
  if (response.ok) {
      const comment = await response.json();
      dispatch(editComment(comment));
      return comment;
  }
};

export const removeComment = (payload) => async dispatch => {
  const response = await csrfFetch (`/api/comments/${payload.id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const comment = await response.json();
    dispatch(deleteComment(comment))
    return true;
  }
};

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case LOAD_COMMENTS: 
      newState = {...state};
      action.comments.forEach((comment) => newState[comment.id] = comment);
      return newState;
    case ADD_COMMENT:
      newState = {...state};
      newState = { ...state, [action.comment.id]: action.comment };
      return newState;
    case EDIT_COMMENT:
      newState = {...state};
      newState = { ...state, [action.comment.id]: action.comment };
      return newState;
    case DELETE_COMMENT:
      newState = { ...state };
      delete newState[action.comment];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;