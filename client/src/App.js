import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/js/src/modal';
import './assets/styles/styles.css';

import Createpage from './routes/Createpage';
import Mainpage from './routes/Mainpage';

const App = () => {
  
    return (
        <BrowserRouter>
          <Switch>
            <Route component={Mainpage} path="/" exact />
            <Route component={Createpage} path="/create" />
          </Switch>
        </BrowserRouter>
    );
}

export default App;
