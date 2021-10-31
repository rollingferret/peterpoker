import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UserList/UsersList';
import User from './components/User/User';
import Chat from './components/chat/chat';
import TestGame from './components/testGame/testGame';
import Test from './components/chatrooms/chatroom';
import { authenticate } from './store/session';
import HomePage from './components/homepage'
import GetAllGameTables from './components/GameTableAll'
import NewGameTable from './components/NewGameTableForm'
import SingleGameTablePage from './components/SingleGameTablePage'
import SingleUserPage from './components/singleUserpage'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <ProtectedRoute path='/gametables/:gametableId' exact={true}>
          <SingleGameTablePage />
        </ProtectedRoute>
        <Route path='/gametables' exact={true}>
          <GetAllGameTables />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users' exact={true} >
          <UsersList/>
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <SingleUserPage />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/newgame' exact={true}>
          <NewGameTable />
        <Chat />
        </ProtectedRoute>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
