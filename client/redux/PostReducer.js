import * as ActionTypes from './PostConstants';

const initialState = {
  posts: []
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST: {
      return Object.assign({}, state, {
        posts: [action.post, ...state.posts]
      });
    }
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
    case ActionTypes.DELETE_POST: {
      const posts = state.posts.filter(post => post.cuid !== action.cuid);
      return Object.assign({}, state, {
        posts
      });
    }
    default:
      return state;
  }
};

export default postReducers;
