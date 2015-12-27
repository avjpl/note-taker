import React from 'react'; 
import Main from 'main/Main';
import Home from 'home/Home';
import Profile from 'profile/Profile';
import Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
