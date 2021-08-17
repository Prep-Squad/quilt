import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Login from './Login';
import { auth } from '../firebase/firebaseIndex';

export default function Routes(props) {
  let user = auth.currentUser;

  return (
    <div>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
