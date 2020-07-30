import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <p>about</p>
            </Route>
            <Route path="/users">
              <p>users</p>
            </Route>
            <Route path="/">
              <p>home</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
