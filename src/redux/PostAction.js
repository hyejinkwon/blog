import fetch from 'isomorphic-fetch';
import * as ActionTypes from './PostConstants';


function apiCall(endpoint = '', method = 'get', body = {}) {
  const init = Object.assign({}, {
    method,
    headers: {
      'content-type': 'application/json'
    }
  }, Object.keys(body).length && {
    body: JSON.stringify(body)
  });

  return fetch(`/api${endpoint}`, init)
          .then((res) => {
            console.log('Response---', res);
            return res.json().then((json) => {
              console.log('JSON then!!', json);
              return { json, res };
            });
          })
          .then(({ json, res }) => {
            console.log('JSON parse then---', json, res);
            if (!res.ok) {
              return Promise.reject(json);
            }
            return json;
          })
          .then(
            (res) => {
              console.log('Final response---', res);
              return res;
            },
            (error) => {
              console.log('Final error', error);
              return error;
            }
          );
          // .then(data => data);
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

function deletePost(cuid) {
  return {
    type: ActionTypes.DELETE_POST,
    cuid
  };
}

function addPost(data) {
  return {
    type: ActionTypes.ADD_POST,
    post: data.post
  };
}


// thunk 미들웨어는 디스패치 메서드를 함수에 인자로 보내줌
// 함수가 직접 액션을 호출 할 수 있게 해줌

export function fetchAddPost(post) {
  return distpath => apiCall('', 'post', post).then(data => distpath(addPost(data)));
}

export function fetchDeletePost(cuid) {
  return dispatch => apiCall(`/${cuid}`, 'delete')
    .then((...args) => {
      console.log('fetchDeletePost', ...args);
      return dispatch(deletePost(cuid));
    })
    .catch((error) => {
      console.log('fetchDeletePost.error', error);
    });
}

export function fetchPost(cuid) {
  return dispatch => apiCall(`/${cuid}`).then(data => dispatch(getPost(data)));
}

export function fetchPosts() {
  return dispatch => apiCall().then(data => dispatch(getPosts(data)));
}
