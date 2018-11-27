import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppGames from './AppGames';
import Memory from './AppMemory';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/games" component={AppGames} />
            <Route path="/memory_game" component={Memory} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
