import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCats from '../containers/AllCats';
import Header from './Header';
import withSession from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/cats" component={withSession(AllCats)}/>
        </Switch>
      </Router>
    </>
  );
}
  
