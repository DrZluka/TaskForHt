import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {createStore} from "redux";
import reducer from "./components/redux-store/reducer";



const store = createStore(reducer,composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

