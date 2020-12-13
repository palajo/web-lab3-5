import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/js/src/modal';
import './assets/styles/styles.css';

import MainPage from './routes/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainPage} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
