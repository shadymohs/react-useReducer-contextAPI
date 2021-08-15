import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserContext } from './Service/UserContext';
import { UserReducer } from './Service/UserReducer';
import Home from './components/Home';
import Login from './components/Login';

export default function App() {  

  const [ userState, dispatch ] = useReducer(UserReducer, { userName: null });

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={ true } component={ Login } />
          <Route path='/home' exact={ true } component={ Home } />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
