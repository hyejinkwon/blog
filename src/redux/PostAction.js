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
        // .then((aa) => {
        //   /* final handler second then promise */
        //   console.log('aa', aa);
        // });
  // let data = {};
  // (async() => {
  //   try {
  //     const res = await fetch(`/posts${endpoint}`, opts);
  //     data = await res.json();
  //     console.log('data', data.posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // })();
  // return data;
}


// async function fetchDatas() {
//   let datas = {};
//
//   await apiCall().then((data) => {
//     // console.log('data.posts', data.posts);
//     datas = data.posts;
//     console.log('getposts---');
//     getPosts(data.posts);
//     // console.log(datas);
//     // return datas;
//   });
//   // console.log('fetchData.datas ===>', datas);
//   return datas;
// }

// 액션타입은 일반 함수로 받는거

function getPosts(data) {
  // console.log('', data);
  // const datas = fetchDatas();

  return {
    type: ActionTypes.GET_POSTS,
    posts: data
  };
}

export function addPost(post) {
  return {
    type: ActionTypes.ADD_POST,
    post
  };
}

export function fetchPosts() {
  // thunk 미들웨어는 디스패치 메서드를 함수에 인자로 보내줌
  // 함수가 직접 액션을 호출 할 수 있게 해줌

  return (dispatch) => {
    console.log('fetchPosts');
    return apiCall().then(data => dispatch(getPosts(data)));
  };
}
