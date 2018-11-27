import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppGames from './AppGames';

import AppRecordChoose from './AppRecordChoose';
import AppRecordMemory from './AppRecordMemory';
import Memory from './AppMemory';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/games" component={AppGames} />
            <Route path="/record_choose" component={AppRecordChoose} />
            <Route path="/record_memory" component={AppRecordMemory} />
            <Route path="/memory_game" component={Memory} />

        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
