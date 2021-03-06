import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProjectDetailFood from './component/projectdetail/ProjectDetailFood';
import ProjectDetailBookio from './component/projectdetail/ProjectDetailBookio';
import ProjectDetailShopistry from './component/projectdetail/ProjectDetailShopistry';
import ProjectDetailHarvest from './component/projectdetail/ProjectDetailHarvest';
import ProjectDetailClimbingLight from './component/projectdetail/ProjectDetailClimbingLight';
import * as ROUTES from './constants/Routes';
import App from './App';
import Header from '../src/component/Header';
import SocialMedia from './component/SocialMedia';
import './scss/style.css';
import './App.css';

const AppBase = () => (
  <div className="container-body">
    <Switch>
      <Route
        exact
        path={ROUTES.PROJECT_DETAIL_FOODSHARER}
        render={() => <ProjectDetailFood />}
      />
      <Route
        exact
        path={ROUTES.PROJECT_DETAIL_BOOKIO}
        render={() => <ProjectDetailBookio />}
      />
      <Route
        exact
        path={ROUTES.PROJECT_DETAIL_SHOPISTRY}
        render={() => <ProjectDetailShopistry />}
      />
      <Route
        exact
        path={ROUTES.PROJECT_DETAIL_HARVEST}
        render={() => <ProjectDetailHarvest />}
      />
      <Route
        exact
        path={ROUTES.PROJECT_DETAIL_CLIMBING}
        render={() => <ProjectDetailClimbingLight />}
      />
      <Route exact path={ROUTES.HOME} render={() => <App />} />
    </Switch>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <AppBase />
    <SocialMedia />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
