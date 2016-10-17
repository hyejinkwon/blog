import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('root'));


// 문제점.. 로컬 state 를 유지하지 않음..
// if (module.hot) {
//   module.hot.accpet();
// }
