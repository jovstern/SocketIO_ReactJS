import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import App from './components/App';
import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';
import Whoops404 from './components/Whoops404'



const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Audience} />
            <Route path={"speaker"} component={Speaker}/>
            <Route path={"board"} component={Board}/>
            <Route path='*' exact={true} component={Whoops404}/>
        </Route>
    </Router>
);


ReactDOM.render(routes, document.getElementById('react-container'));