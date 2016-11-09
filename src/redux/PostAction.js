import fetch from 'isomorphic-fetch';
import * as ActionTypes from './PostConstants';


function apiCall(endpoint = '', method = 'get', body = {}) {
  const init = Object.assign({}, {
    method,
    headers: {
      'content-type': 'application/json'
    }
  }, body.length && {
    body: JSON.stringify(body)
  });
  // console.log('init', init);
  return fetch(`/posts${endpoint}`, init)
          .then(res => res.json())
          .then(data => data);
}

// 액션타입은 일반 함수로 받음
function getPosts(data) {
  return {
    type: ActionTypes.GET_POSTS,
    posts: data.posts
  };
}

function getPost(data) {
  return {
    type: ActionTypes.GET_POST,
    post: data.post
  };
}

export function addPost(post) {
  return {
    type: ActionTypes.ADD_POST,
    post
  };
}

// thunk 미들웨어는 디스패치 메서드를 함수에 인자로 보내줌
// 함수가 직접 액션을 호출 할 수 있게 해줌

export function fetchPost(cuid) {
  return dispatch => apiCall(`/${cuid}`).then(data => dispatch(getPost(data)));
}

export function fetchPosts() {
  return dispatch => apiCall().then(data => dispatch(getPosts(data)));
}
