import React from 'react';
import './App.css';
import API from './components/api';
import Todos from './components/todos';
import Nav from './components/nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={API} />
        <Route path="/api" exact component={API} />
        <Route path="/todos" exact component={Todos} />
      </Switch>
    </Router>
  );
}

export default App;
