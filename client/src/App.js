import React from 'react';
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu"
import FetchUser from "./components/FetchUser"
// import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <Menu />
    <FetchUser>
      <Container>
        <Switch>
          {/* <ProtectedRoute exact path="" component={} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
