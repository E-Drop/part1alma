import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import {PatientsList} from './containers/PatientsList';
import {AddPatient} from './containers/AddPatient';

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={AddPatient} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
