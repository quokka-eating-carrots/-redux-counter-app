import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import reportWebVitals from './reportWebVitals';
import rootRender from './reducers'
import { Provider } from 'react-redux'
import loggerMiddleware from './middleware/log';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const middleware = applyMiddleware(loggerMiddleware)
const store = createStore(rootRender, middleware)

const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

render()

store.subscribe(render)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
