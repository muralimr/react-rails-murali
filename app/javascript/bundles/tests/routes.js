// app/javascript/routes.js
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Tests from './bundles/tests/index';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Tests />
      </Route>
      <Route
        path="/tests/:id"
        exact
        component={TestDetails}
       />
    </Switch>
  );
}