import React from 'react';
import './App.css';

import { NavigationBar } from './components/NavigationBar';
import { Router, BrowserRouter, Route } from "react-router-dom";

import { history } from './helpers/history';
import { authenticationService } from './services/authentication.service';
import { PrivateRoute } from './components/PrivateRoute';
import { routes } from './router/Routes';
import useToken from './components/token';
import Sidebar from './components/Sidebar';
import Login from './pages/login';
import Home from './pages/home';
import { About } from './pages/about';
import UserRegister from './pages/user';
import NaviLink from './components/NaviLink';


const App = () => {
  const { token, setToken } = useToken();

  function logout() {
    authenticationService.logout();
    history.push('/login');
  }

  if (!token) {
    return <Login setToken={setToken} />
  };

  return (
    <Router history={history}>
      <BrowserRouter>
        <NavigationBar />
        {token &&
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <NaviLink to="/" className="nav-item nav-link">Home</NaviLink>
              <a onClick={logout()} className="nav-item nav-link">Logout</a>
            </div>
          </nav>
        }
        <div style={{ display: "flex" }}>
          <Sidebar items={routes} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={UserRegister} />
        </div>
      </BrowserRouter>
    </Router>
  );

};

export default App;
