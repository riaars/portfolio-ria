import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProjectDetail from './component/projectdetail/ProjectDetail';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route exact path="/project/foodsharer" component={ProjectDetail} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
