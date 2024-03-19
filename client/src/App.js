import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './view/landingPage/LandingPage';
import Home from './components/home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

