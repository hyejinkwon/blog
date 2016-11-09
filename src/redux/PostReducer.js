import * as ActionTypes from './PostConstants';

const initialState = {
  posts: []
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return Object.assign();
    case ActionTypes.GET_POSTS: {
      return Object.assign({}, state, {
        posts: action.posts
      });
    }
    case ActionTypes.GET_POST: {
      return Object.assign({}, state, {
        post: action.post
      });
    }
    default:
      return state;
  }
};

export default postReducers;
