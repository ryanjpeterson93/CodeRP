import React from 'react';
import { Switch, Route } from "react-router-dom";
// import Container from "react-bootstrap/Container"
import Home from "./components/HomePage/Home";
import NoMatch from "./components/NoMatch";
import Login from "./LoginandRegister/Login";
import Register from "./LoginandRegister/Register";
import Menu from "./components/Menu"
import FetchUser from "./components/FetchUser"
import AboutMe from './components/AboutPage/AboutMe';
import Projects from './components/ProjectsPage/Projects';
import Contact from './components/Contacted/Contact';
import ContactedMe from './components/Contacted/ContactedMe';
import ProtectedRoute from './components/ProtectedRoute';
import ContactForm from './components/Contacted/ContactForm';
import Landing from './components/LandingPage/Landing'
import ParticlesBg from 'particles-bg'

document.body.style.backgroundColor = "#f5f5f5"

const App = () => (
  <>
    <ParticlesBg color="#606060" num={50} type="cobweb" bg={true} />
    <Menu/>
    <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/contacted-me" component={ContactedMe} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact/form" component={ContactForm} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
  </>
)

export default App;
