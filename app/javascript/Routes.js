// app/javascript/routes.js
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Tests from './bundles/tests/index';
import TestDetails from './bundles/tests/TestDetails';
import CreateTest from './bundles/tests/CreateTest';
import UpdateTest from './bundles/tests/UpdateTest';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Tests />
      </Route>
      <Route
        path="/tests/new"
        exact
        component={CreateTest}
       />
      <Route
        path="/tests/:id"
        exact
        component={TestDetails}
       />
      <Route
        path="/tests/:id/edit"
        exact
        component={UpdateTest}
       />
    </Switch>
  );
}
