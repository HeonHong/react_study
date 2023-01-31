import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rootReducer from './store';
//import {createStore} from 'redux';//deprecated(작동은 된다.)
import {legacy_createStore as createStore} from 'redux';//위에 거가 안될 경우 사용. legacy는 옛날 거를 사용한다는 의미이다.
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';//chrome에 확장프로그램 다운 먼저

const store=createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <App>아래 후손까지 store써도 된다.  */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
