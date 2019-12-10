import React from 'react';
import './App.css';
import Todos from './components/todos';
import Nav from './components/nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/web-apps" exact component={Todos} />
      </Switch>
    </Router>
  );
}

export default App;
