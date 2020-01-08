import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParam
} from 'react-router-dom';
import Main from './pages/main/Main';
import Terms from './pages/terms/Terms';
import Test from './pages/test/Test';
import './App.css';


// @flow

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/test",
    component: Test
  },
  {
    path: "/terms",
    component: Terms
  }
];

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/test">test</Link>
          </li>
          <li>
            <Link to="/terms">terms</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Main hello="hello world" />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
